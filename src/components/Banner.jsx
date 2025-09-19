import Image from "next/image";
import React from "react";
import picture from "@/assets/picture.png";
import arrow from "@/assets/arrow.png";
import { banner } from "@/assets/assets";

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
        <div className=" flex items-center">
          {banner.map((item, index) => (
            <div key={index} className=" relative">
              <Image
                src={item.image}
                alt=""
                height={340}
                width={200}
                className=" rounded-md h-92 w-72"
              />
              <p className=" bg-black opacity-85 top-1 left-2 text-sm absolute text-white py-1 rounded-xl px-4 ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Banner;
