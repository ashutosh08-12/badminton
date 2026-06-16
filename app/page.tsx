import AboutSection from "@/components/aboutSection/AboutSection";
import BadmintonJor from "@/components/BadmintonJourney/BadmintonJor";
import CTASection from "@/components/CTA/CTASection";
import HeroSection from "@/components/hero section/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <BadmintonJor/>
    <CTASection/> */}
    <HeroSection/>
    <AboutSection/>
    <BadmintonJor/>
    <CTASection/>
    </>
  );
}
