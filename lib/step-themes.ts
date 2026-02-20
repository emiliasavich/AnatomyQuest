export const STEP_STYLES = {
  location: {
    bg: "bg-[#2563eb]/10",
    border: "border-[#2563eb]/25",
    heading: "text-[#2563eb]",
    label: "text-[#2563eb]",
  },
  shape: {
    bg: "bg-[#059669]/10",
    border: "border-[#059669]/25",
    heading: "text-[#059669]",
    label: "text-[#059669]",
  },
  neighbors: {
    bg: "bg-[#7c3aed]/10",
    border: "border-[#7c3aed]/25",
    heading: "text-[#7c3aed]",
    label: "text-[#7c3aed]",
  },
  landmarks: {
    bg: "bg-[#dc2626]/10",
    border: "border-[#dc2626]/25",
    heading: "text-[#dc2626]",
    label: "text-[#dc2626]",
  },
  blood: {
    bg: "bg-[#ea580c]/10",
    border: "border-[#ea580c]/25",
    heading: "text-[#ea580c]",
    label: "text-[#ea580c]",
  },
} as const;

export type StepKey = keyof typeof STEP_STYLES;

export interface AccordionColorTheme {
  headerBg: string;
  headerHoverBg: string;
  headerText: string;
  borderColor: string;
  contentBg?: string;
}

export const STEP_ACCORDION_THEMES: Record<StepKey, AccordionColorTheme> = {
  location: {
    headerBg: "bg-[#2563eb]/15",
    headerHoverBg: "hover:bg-[#2563eb]/25",
    headerText: "text-[#2563eb]",
    borderColor: "border-[#2563eb]/25",
    contentBg: "bg-[#2563eb]/10",
  },
  shape: {
    headerBg: "bg-[#059669]/15",
    headerHoverBg: "hover:bg-[#059669]/25",
    headerText: "text-[#059669]",
    borderColor: "border-[#059669]/25",
    contentBg: "bg-[#059669]/10",
  },
  neighbors: {
    headerBg: "bg-[#7c3aed]/15",
    headerHoverBg: "hover:bg-[#7c3aed]/25",
    headerText: "text-[#7c3aed]",
    borderColor: "border-[#7c3aed]/25",
    contentBg: "bg-[#7c3aed]/10",
  },
  landmarks: {
    headerBg: "bg-[#dc2626]/15",
    headerHoverBg: "hover:bg-[#dc2626]/25",
    headerText: "text-[#dc2626]",
    borderColor: "border-[#dc2626]/25",
    contentBg: "bg-[#dc2626]/10",
  },
  blood: {
    headerBg: "bg-[#ea580c]/15",
    headerHoverBg: "hover:bg-[#ea580c]/25",
    headerText: "text-[#ea580c]",
    borderColor: "border-[#ea580c]/25",
    contentBg: "bg-[#ea580c]/10",
  },
} as const;
