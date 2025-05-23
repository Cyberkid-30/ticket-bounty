import { CardCompact } from "@/components/card-compact";
import { SignUpform } from "@/features/auth/components/sign-up-form";
import { signInPath } from "@/paths";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <CardCompact
        title="Sign Up"
        description="Create an account to get started"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignUpform />}
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Have an account? Sign in now.
          </Link>
        }
      />
    </div>
  );
};

export default SignUpPage;
