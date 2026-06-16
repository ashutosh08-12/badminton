"use client";


import Image from "next/image";
import { useEffect, useState } from "react";

export default function BadmintonJor() {


    const [count, setCount] = useState(50);

  useEffect(() => {
    let start = 50;
    const end = 300;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center py-10 ">
      <div className="relative  h-[700px] overflow-hidden rounded-[24px] bg-[radial-gradient(36.52%_38.7%_at_50%_50.07%,#000000_0%,#010426_100%)]">

        <Image
          src="/line.png"
          alt="bg-line"
          width={700}
          height={100}
          className="absolute right-0 top-[50px] opacity-50"
        />

        <div className="relative z-10 flex h-full p-[20px] gap-6">

  <div className="relative w-[628px] h-[665px] overflow-hidden rounded-[14px]">
    <Image
      src="/badmintonJor.png"
      alt="Badminton"
      fill
      className="object-cover"
    />

            <div
      className="
      absolute
      left-[224px]
      top-[451px]
  
      h-[130px]
      rounded-[8px]
      bg-[#F3F5F8]
      p-4
      shadow-lg
    "
    >
      <div className="flex items-center justify-between">
        <h3
          className="
          font-funnel
          text-[18px]
          leading-[28px]
          font-normal
          text-black
        "
        >
          Coaching Network
        </h3>

        <Image
          src="/network.png"
          alt="icon"
          width={34}
          height={34}
        />
      </div>

      <div className="mt-3 flex items-end justify-between">
  <div className="flex items-end">
    <span
      className="
        font-funnel
        text-[60px]
        leading-[100%]
        font-medium
        text-[#010426]
      "
    >
      {count}
    </span>

    <div className="relative ml-[2px] mb-[8px]">
      <span
        className="
          font-funnel
          text-[32px]
          leading-none
          font-medium
          text-[#000000]
          block
        "
      >
        k
      </span>

      <span
        className="
          absolute
          -top-[20px]
          right-[6px]
          font-funnel
          text-[24px]
          leading-none
          font-medium
          text-[#4A56FF]
        "
      >
        +
      </span>
    </div>
  </div>

  <div
    className="
      font-funnel
      text-[14px]
      ml-[6px]
      mb-[6px]
      leading-[20px]
      font-light
      text-[#B3B3B3]
      text-left
    "
  >
    Certified
    <br />
    Trainers &
    <br />
    Mentors
  </div>
</div>
    </div>
  </div>

  <div className="flex flex-col justify-start mt-[66px]">

    <h1 className="font-funnel text-[58px] leading-[100%] text-white">
      Unleash Your
      <br />
      Badminton
      <br />
      Journey Today
    </h1>

    <p className="mt-10 max-w-[420px] text-[18px] leading-[28px] text-[#D8D8D8]">
      Train hard, grow fast, and feel the thrill of progress.
      Your badminton journey starts here!
    </p>

    <button className="mt-16 w-[174px] h-[40px] rounded-[30px] border border-white bg-white text-[16px] text-[#010426]">
      Become A Member
    </button>

  </div>

</div>
      </div>
    </section>
  );
}