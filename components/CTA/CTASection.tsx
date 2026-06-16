import Image from "next/image";

export default function CTASection() {
  return (
    <section className="flex justify-center py-12 px-5">
      <div className="relative w-[1128px] h-[416px] overflow-hidden rounded-[24px] px-16 py-24 bg-[#03056F]">
        <Image
  src="/left.png"
  alt="left"
  width={200}
  height={200}
  className="absolute bottom-0 left-0"
/>

<Image
  src="/right.png"
  alt="right"
  width={200}
  height={200}
  className="absolute bottom-0 right-0"
/>

        <div className="relative z-10 flex flex-col items-center">
          <p
            className="
              font-funnel
              text-[16px]
              leading-[124%]
              font-normal
              text-white
              text-center
              mb-4
            "
          >
            Begin Your Journey
          </p>

          <h2
            className="
              font-literata
              text-[56px]
              leading-[64px]
              tracking-[-1.6px]
              font-normal
              text-center
              text-white
            "
          >
            Claim Your Spot-
            <span className="italic text-[#8F96FF]">
              {" "}
              Let's Elevate!
            </span>
          </h2>

          <p
            className="
              mt-6
              
              font-funnel
              text-[18px]
              leading-[28px]
              text-center
              text-[#ABABAB]
              font-normal
            "
          >
            Take a breath. Start with a free class—no credit card,
            no pressure, just peace.
          </p>

          <button
  className="
    mt-10
    flex items-center justify-center gap-[10px]
    
    h-[40px]
    rounded-[30px]
    border border-white
    bg-white
    px-[18px]
    py-[10px]
    font-funnel
    text-[16px]
    font-normal
    leading-[124%]
    tracking-[0]
    text-[#010426]
    transition-all
    duration-300
    hover:scale-105
  "
>
  Book Your Slot
</button>
        </div>
      </div>
    </section>
  );
}