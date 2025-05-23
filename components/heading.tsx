import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface HeadingProps {
  tabs?: ReactNode;
  title: string;
  description?: string;
}
const Heading = ({ title, description, tabs }: HeadingProps) => {
  return (
    <>
      {tabs}
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && <p className="text-sm">{description}</p>}
      </div>

      <Separator />
    </>
  );
};

export default Heading;
