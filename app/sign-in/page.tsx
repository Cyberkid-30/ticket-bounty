import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { passwordForgot, signUpPath } from "@/paths";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignInForm />}
        footer={
          <>
            <Link
              href={signUpPath()}
              className="text-sm text-muted-foreground mr-auto"
            >
              No account yet?
            </Link>

            <Link
              href={passwordForgot()}
              className="text-sm text-muted-foreground"
            >
              Forgot password?
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignUpPage;
