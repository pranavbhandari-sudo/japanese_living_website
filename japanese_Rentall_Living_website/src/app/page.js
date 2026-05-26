"use client";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Features from "@/components/sections/Features";
import Listings from "@/components/sections/Listings";
import HowItWorks from "@/components/sections/HowItWorks";
import CityGuide from "@/components/sections/CityGuide";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Listings />
        <HowItWorks />
        <CityGuide />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
