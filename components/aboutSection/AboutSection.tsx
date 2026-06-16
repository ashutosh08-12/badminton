"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function AboutSection() {
  return (
    <section className="  bg-[#F5F5F7] py-20">
      <div className=" container mx-auto px-12 flex  gap-30">

        <div className="flex flex-col">
          <div className="mb-5">
            <div className="inline-flex h-10 items-center rounded-[30px]  border border-[#010426] px-4">
              <span className="font-funnel text-[16px] font-normal leading-[124%] text-[#010426]">
                • &nbsp; About Heritage
              </span>
            </div>
          </div>

          <div className="relative w-[360px] h-[450px] overflow-hidden rounded-[8px]">
            <Image
              src="/about.png"
              alt="About Heritage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col pt-[55px]">

          <h2 className="font-funnel w-[576px] text-[30px] leading-[130%] font-light text-[#010426]">
            For those who live and breathe badminton —
            <span className="text-[#4251EE]">
              {" "}Heritage Academy
            </span>{" "}
            delivers elite coaching, refined training, and a world-class player experience.
          </h2>

          <div className="mt-12 flex gap-30">

  <div className="">
    <h3 className="font-funnel text-[48px] leading-[100%] text-[#010426]">
      <CountUp end={1000} duration={3} separator="," />
      +
    </h3>

    <h4 className="mt-3 font-funnel text-[24px] leading-[100%] text-[#010426]">
      Players Trained
    </h4>

    <p className="mt-2  text-[16px] leading-[124%] text-[#ABABAB]">
      Nurturing talent with <br />structured development.
    </p>
  </div>

  <div>
    <h3 className="font-funnel text-[48px] leading-[100%] text-[#010426]">
      <CountUp end={10} duration={3} />
      +
    </h3>

    <h4 className="mt-3 font-funnel text-[24px] leading-[124%] text-[#010426]">
      Certified Coaches
    </h4>

    <p className="mt-2 text-[16px] leading-[124%] text-[#A6A6A6]">
      Delivering elite, technique- <br />driven coaching.
    </p>
  </div>

  <div>
    <h3 className="font-funnel text-[48px] leading-[100%] text-[#010426]">
      <CountUp end={95} duration={3} />
      %
    </h3>

    <h4 className="mt-3 font-funnel text-[24px] leading-[124%] text-[#010426]">
      Satisfaction Score
    </h4>

    <p className="mt-2 text-[16px] leading-[124%] text-[#A6A6A6]">
      Parents and players trust <br />our results.
    </p>
  </div>

</div>

          <button
            className="
              mt-14
              flex
              items-center
              justify-center
              w-43
              h-10
              rounded-[30px]
              bg-[#000863]
              px-[18px]
              py-[10px]
              font-funnel
              text-[16px]
              font-normal
              leading-[124%]
              text-white
              transition-all
              duration-300
              hover:bg-[#1624c5]
            "
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}