export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: unknown): ValidationResult {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { ok: false, errors: ["Invalid request body"] };
  }

  const { name, email, message } = data as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length === 0) {
    errors.push("Name is required");
  } else if (name.trim().length > MAX_NAME_LENGTH) {
    errors.push(`Name must be ${MAX_NAME_LENGTH} characters or fewer`);
  }

  if (typeof email !== "string" || email.trim().length === 0) {
    errors.push("Email is required");
  } else if (email.trim().length > MAX_EMAIL_LENGTH) {
    errors.push(`Email must be ${MAX_EMAIL_LENGTH} characters or fewer`);
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push("Email format is invalid");
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    errors.push("Message is required");
  } else if (message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.push(`Message must be ${MAX_MESSAGE_LENGTH} characters or fewer`);
  }

  return { ok: errors.length === 0, errors };
}

export function sanitize(str: string): string {
  return str.trim().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
}
