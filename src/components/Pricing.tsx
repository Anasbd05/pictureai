import { prices } from "@/assets/assets";
import { Check, Star } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className=" py-20 w-11/12 mx-auto ">
      <div className="flex flex-col items-center gap-1 mb-10">
        <h2 className=" font-semibold text-2xl ">Choose Your Plan</h2>
        <p className=" text-neutral-500 ">
          Select the perfect plan for your credit needs
        </p>
      </div>
      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {prices.map((pricing, index) => (
          <div
            key={index}
            className={` flex flex-col items-center shadow-md py-6 px-5 rounded-lg ${
              pricing.title === "Premium"
                ? " border relative border-black"
                : " "
            } `}
          >
            <div
              className={`bg-black absolute -top-3 py-1 px-2.5 rounded-lg items-center text-white text-xs gap-2 flex ${
                pricing.title === "Premium" ? "" : " hidden "
              } `}
            >
              <Star className=" h-3 w-3 " />
              <span>Most Popular</span>
            </div>
            <h2 className=" text-xl font-semibold mb-2 ">{pricing.title}</h2>
            <p className=" text-neutral-500 text-sm mb-8 ">{pricing.desc}</p>
            <h1 className=" text-3xl font-semibold ">
              ${pricing.price}
              <span className=" text-neutral-400 font-normal text-sm ">
                /One time
              </span>{" "}
            </h1>
            <div className=" py-1 rounded-lg px-4 border border-black text-xs mt-5 ">
              10 Credits = 1 Image
            </div>
            <ul className="mt-10 flex flex-col gap-3 ">
              {pricing.features.map((feature, index) => (
                <div key={index} className=" flex gap-4 ">
                  <Check className="h-5 w-5 text-neutral-700" />
                  <p className=" text-sm text-neutral-700 ">{feature}</p>
                </div>
              ))}
            </ul>
            <button
              className={` text-sm font-medium  cursor-pointer w-full mt-8 py-2 rounded-lg ${
                pricing.title !== "Premium"
                  ? " bg-gray-50 shadow-sm text-black hover:bg-gray-100 "
                  : "bg-neutral-900 text-white  hover:bg-neutral-800"
              } `}
            >
              Add Credits
            </button>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Pricing;
