// app/page.tsx
"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedSection />
      <TestimonialSection />
    </div>
  );
}
