"use client";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cloneElement, FormEvent, ReactElement } from "react";
import clsx from "clsx";

interface SubmitButtonProps {
  onClick?: (e: FormEvent) => void;
  label?: string;
  icon?: ReactElement<{ className: string }>;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const SubmitButton = ({
  onClick,
  label,
  icon,
  variant,
  size,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      onClick={onClick}
      disabled={pending}
      className="cursor-pointer"
      type="submit"
      variant={variant}
      size={size}
    >
      {pending && (
        <LucideLoaderCircle
          className={clsx("size-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}

      {pending ? null : icon ? (
        <span
          className={clsx({
            "ml-2": !!label,
          })}
        >
          {cloneElement(icon, {
            className: "size-4",
          })}
        </span>
      ) : null}
    </Button>
  );
};
