import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function SignupForm({
  searchParams,
  ...props
}: {
  searchParams: { message: string; code: string };
} & React.ComponentProps<"form">) {
  const signUp = async (formData: FormData) => {
    "use server";
    const origin = (await headers()).get("origin");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmpassword = formData.get("confirmpassword") as string;

    if (password !== confirmpassword) {
      alert("Passwords don't match");
    }
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/login`,
      },
    });
    if (error) {
      console.log(error.message);
    } else {
      redirect("/auth/signup?message=signup-success");
    }
  };

  return (
    <form action={signUp} className={"flex flex-col gap-6"} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to Sign up
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <label htmlFor="email" className=" text-sm -mb-2 ">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className=" py-1.5 rounded-lg px-3 border border-neutral-300 shadow "
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center  -mb-2 ">
            <label htmlFor="password" className=" text-sm  ">
              Password
            </label>
          </div>
          <input
            placeholder="******"
            className=" py-1.5 rounded-lg px-3 border border-neutral-300 shadow "
            id="password"
            name="password"
            type="password"
            required
          />
          <div className="flex items-center  -mb-2 ">
            <label htmlFor="confirmpassword" className=" text-sm  ">
              Confirm Password
            </label>
          </div>
          <input
            placeholder="******"
            className=" py-1.5 rounded-lg px-3 border border-neutral-300 shadow "
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer py-2 bg-black text-white rounded-lg "
        >
          Sign up
        </button>
        {searchParams?.message === "signup-success" && (
          <p className="text-green-600 text-sm text-center">
            We’ve sent you a verification email. Click the link inside to
            finalize your signup.
          </p>
        )}
      </div>
      <div className="text-center text-sm">
        I have an account?{" "}
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
