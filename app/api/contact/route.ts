import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, sanitize } from "@/lib/email/validation";
import { isRateLimited } from "@/lib/email/rateLimit";

const SEND_EMAIL_API_BASE = "https://api-send-mail-anatomy.vercel.app";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);

    const validation = validateContactForm(body);
    if (!validation.ok) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, message, subjectTopic } = body as {
      name: string;
      email: string;
      message: string;
      subjectTopic?: string;
    };

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);
    const nameForSubject = safeName.replace(/[\r\n]+/g, " ").slice(0, 80);
    const topic =
      typeof subjectTopic === "string" && subjectTopic.trim()
        ? sanitize(subjectTopic).replace(/[\r\n]+/g, " ").slice(0, 60)
        : "";
    const subject =
      topic.length > 0
        ? `[AnatomyQuest] ${topic} – Message from ${nameForSubject}`.slice(0, 200)
        : `[AnatomyQuest] Message from ${nameForSubject}`.slice(0, 200);

    const apiUrl = SEND_EMAIL_API_BASE;
    const payload = {
      user_name: safeName,
      user_email: safeEmail,
      subject,
      message: safeMessage,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const trySend = async (path: string) =>
      fetch(`${apiUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

    let res = await trySend("/api/send-email");
    if (res.status === 404) {
      res = await trySend("/send-email");
    }
    clearTimeout(timeoutId);

    const data = await res.json().catch(() => ({}));
    const apiMessage = (data as { message?: string }).message;

    if (!res.ok) {
      console.error("Contact API error:", res.status, apiMessage ?? res.statusText);
      throw new Error(apiMessage ?? `Send failed (${res.status})`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === "AbortError";
    const message = isTimeout
      ? "The request took too long. Please try again."
      : err instanceof Error
        ? err.message
        : "Failed to send message. Please try again later.";
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
