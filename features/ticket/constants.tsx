import { LucideFileText, LucidePencil, LucideCircleCheck } from "lucide-react";

export const TICKETS_ICON_MAP = {
  OPEN: <LucideFileText />,
  DONE: <LucideCircleCheck />,
  IN_PROGRESS: <LucidePencil />,
};

export const TICKETS_STATUS_LABELS = {
  OPEN: "Open",
  DONE: "Done",
  IN_PROGRESS: "In progress",
};
