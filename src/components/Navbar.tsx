import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav className="  py-3  text-white w-4/5 md:w-4/6 mx-auto shadow-md mt-4 mb-20 px-10 flex items-center justify-between rounded-full bg-neutral-800 border-2 border-amber-400 ">
      <h2 className=" text-xl font-head ">Picture_Ai</h2>
      <Link href={"/pricing"} className=" text-sm">
        Pricing
      </Link>
      {session ? (
        <Link
          href={"/dashboard"}
          className=" py-2 text-sm px-5 hover:bg-gray-100 cursor-pointer bg-white text-black rounded-full "
        >
          Dashboard
        </Link>
      ) : (
        <Link
          href={"/auth/login"}
          className=" py-2 text-sm px-5 hover:bg-gray-100 cursor-pointer bg-white text-black rounded-full "
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
