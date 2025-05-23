import { RedirectToast } from "@/components/redirect-toast";
import React, { ReactNode } from "react";

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
