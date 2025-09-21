import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export async function LoginForm() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  const login = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log(error);
      } else {
        redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={login} className={"flex flex-col gap-6"}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
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
            <Link
              href="/forget-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <input
            placeholder="******"
            className=" py-1.5 rounded-lg px-3 border border-neutral-300 shadow "
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer py-2 bg-black text-white rounded-lg "
        >
          Login
        </button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </form>
  );
}
