import { SignupForm } from "@/components/auth/SignupForm";
import Link from "next/link";

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message?: string; code?: string };
}) {
  return (
    <div className="grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center font-head gap-2 font-medium"
          >
            Picture_ai
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm
              searchParams={{
                message: searchParams?.message || "",
                code: searchParams?.code || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
