import Image from "next/image";
import React from "react";
import picture from "@/assets/picture.png";
import arrow from "@/assets/arrow.png";
import black_white from "@/assets/black&&white.webp";
import Linkedin_shot from "@/assets/linkedinshot.webp";
import street from "@/assets/street.webp";

const Banner = () => {
  return (
    <section className=" py-20 px-14 ">
      <main className="flex items-center justify-between gap-5 flex-col lg:flex-row ">
        <div className="flex items-center gap-10">
          <Image
            src={picture}
            alt=""
            className=" rounded-lg  "
            height={200}
            width={240}
          />
          <Image
            src={arrow}
            alt=""
            className=" rounded-lg "
            height={80}
            width={80}
          />
        </div>
        <main className="flex items-center justify-center -space-x-10 ">
          {/* Left image */}
          <div className="relative -rotate-4 -translate-y-4">
            <Image
              src={street}
              alt="Street photography"
              className="w-72 h-96 object-cover rounded-2xl shadow-lg"
            />
            <p className="absolute top-2 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded-lg">
              Street photography
            </p>
          </div>

          {/* Center image (main focus) */}
          <div className="relative z-20">
            <Image
              src={Linkedin_shot}
              alt="Linkedin headshot"
              className="w-80 h-[420px] -mt-10 object-cover rounded-2xl shadow-xl"
            />
            <p className="absolute -top-8 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded-lg">
              Linkedin headshot
            </p>
          </div>

          {/* Right image */}
          <div className="relative rotate-4 -translate-y-4">
            <Image
              src={black_white}
              alt="Black and white portrait"
              className="w-72 h-96 object-cover rounded-2xl shadow-lg"
            />
            <p className="absolute top-2 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded-lg">
              Black and white portrait
            </p>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Banner;
