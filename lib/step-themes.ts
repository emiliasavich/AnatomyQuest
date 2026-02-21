export const STEP_STYLES = {
  location: {
    bg: "bg-[#2e7d8c]/10",
    border: "border-[#2e7d8c]/25",
    heading: "text-[#2e7d8c]",
    label: "text-[#2e7d8c]",
  },
  shape: {
    bg: "bg-[#4a7a2e]/10",
    border: "border-[#4a7a2e]/25",
    heading: "text-[#4a7a2e]",
    label: "text-[#4a7a2e]",
  },
  neighbors: {
    bg: "bg-[#6d5a8a]/10",
    border: "border-[#6d5a8a]/25",
    heading: "text-[#6d5a8a]",
    label: "text-[#6d5a8a]",
  },
  landmarks: {
    bg: "bg-[#a67c2e]/10",
    border: "border-[#a67c2e]/25",
    heading: "text-[#a67c2e]",
    label: "text-[#a67c2e]",
  },
  blood: {
    bg: "bg-[#9e3a3a]/10",
    border: "border-[#9e3a3a]/25",
    heading: "text-[#9e3a3a]",
    label: "text-[#9e3a3a]",
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
    headerBg: "bg-[#2e7d8c]/15",
    headerHoverBg: "hover:bg-[#2e7d8c]/25",
    headerText: "text-[#2e7d8c]",
    borderColor: "border-[#2e7d8c]/25",
    contentBg: "bg-[#2e7d8c]/10",
  },
  shape: {
    headerBg: "bg-[#4a7a2e]/15",
    headerHoverBg: "hover:bg-[#4a7a2e]/25",
    headerText: "text-[#4a7a2e]",
    borderColor: "border-[#4a7a2e]/25",
    contentBg: "bg-[#4a7a2e]/10",
  },
  neighbors: {
    headerBg: "bg-[#6d5a8a]/15",
    headerHoverBg: "hover:bg-[#6d5a8a]/25",
    headerText: "text-[#6d5a8a]",
    borderColor: "border-[#6d5a8a]/25",
    contentBg: "bg-[#6d5a8a]/10",
  },
  landmarks: {
    headerBg: "bg-[#a67c2e]/15",
    headerHoverBg: "hover:bg-[#a67c2e]/25",
    headerText: "text-[#a67c2e]",
    borderColor: "border-[#a67c2e]/25",
    contentBg: "bg-[#a67c2e]/10",
  },
  blood: {
    headerBg: "bg-[#9e3a3a]/15",
    headerHoverBg: "hover:bg-[#9e3a3a]/25",
    headerText: "text-[#9e3a3a]",
    borderColor: "border-[#9e3a3a]/25",
    contentBg: "bg-[#9e3a3a]/10",
  },
} as const;
