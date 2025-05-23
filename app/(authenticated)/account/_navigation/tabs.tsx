"use client";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { accountPasswordPath, accountProfilePath } from "@/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AccountTabs = () => {
  const pathname = usePathname();

  return (
    <Tabs value={pathname.split("/").at(-1)}>
      <TabsList>
        <TabsTrigger value="profile" asChild>
          <Link href={accountProfilePath()}>Profile</Link>
        </TabsTrigger>
        <TabsTrigger value="password" asChild>
          <Link href={accountPasswordPath()}>Password</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
