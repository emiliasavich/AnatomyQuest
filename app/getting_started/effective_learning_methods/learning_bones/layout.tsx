import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Effectively Study Bones",
  description:
    "A five-step method for learning bones — location, shape, neighbors, anatomical landmarks, and blood supply — with interactive exercises.",
};

export default function LearningBonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
