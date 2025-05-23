import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { ReactNode } from "react";

export default async function AuthenticatedLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  await getAuthOrRedirect();

  return <>{children}</>;
}
