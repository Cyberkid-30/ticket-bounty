import { ReactElement } from "react";

export type NavItem = {
  separator?: boolean;
  href: string;
  title: string;
  icon: ReactElement<{ className?: string }>;
};
