"use client";

import Image from "next/image";
import Header from "../Header/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSection() {
  const heroImages = [
    "/hero-bg.png",
    "/hero-bg.png",
    "/hero-bg.png",
    "/hero-bg.png",
  ];

  const players = [
    "/player1.png",
    "/player2.png",
    "/player3.png",
    "/player4.png",
  ];

  return (
    <section className="px-3 pt-2  bg-[#F5F5F7]">
      <div className="relative  overflow-hidden rounded-[20px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          loop={true}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-186">
                <Image
                  src={image}
                  alt={`hero-${index}`}
                  fill
                  priority
                  className="object-fit"
                />

                <div className="absolute inset-0 " />

                <div className="relative z-10 flex h-full flex-col px-8 py-6">
                  <Header />

                  <div className="mt-10">
                    <div
                      className="
                      flex
                      items-center
                      w-fit
                      rounded-full
                      bg-[#9EB9B7]
                      px-[8px]
                      py-[6px]
                    "
                    >
                      {players.map((player, i) => (
                        <div
                          key={i}
                          className={`
                          relative
                          w-[42px]
                          h-[42px]
                          rounded-full
                          overflow-hidden
                          border-2 border-white
                          ${i !== 0 ? "-ml-3" : ""}
                        `}
                        >
                          <Image
                            src={player}
                            alt="player"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <p
                      className="
                        mt-2
                        text-[16px]
                        leading-[124%]
                        font-normal
                        text-white
                      "
                    >
                      Trusted By 100K+ Players
                    </p>
                  </div>

                  <div className="mt-auto pb-8">
                    <div className="inline-flex items-center h-[40px] rounded-[30px] bg-white/20 px-4 backdrop-blur-md">
                      <span className="text-[16px] text-white">
                        • Where passion meets Precision
                      </span>
                    </div>

                    <h1
                      className="
                        mt-5
                        text-[60px]
                        leading-[100%]
                        font-normal
                        text-white
                      "
                    >
                      Play. Grow. Win.
                      <br />
                      Experience Smashville like
                      <br />
                      never before with Heritage
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 right-10 z-50 flex gap-[7px]">
          <button
            className="
              hero-prev
              flex
              items-center
              justify-center
              w-[46px]
              h-[46px]
              rounded-full
              border-[0.64px]
              border-black
              text-black
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            ←
          </button>

          <button
            className="
              hero-next
              flex
              items-center
              justify-center
              w-[46px]
              h-[46px]
              rounded-full
              border-[0.64px]
              border-black
              text-black
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}