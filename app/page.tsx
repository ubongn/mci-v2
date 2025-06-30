// app/page.tsx
"use client";

import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PillarsSection from "@/components/sections/PillarsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <PillarsSection />
      <TestimonialSection />
    </div>
  );
}
