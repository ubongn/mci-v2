"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" py-20 mt-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight">
            Empowering the Next Generation
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            MCI is dedicated to nurturing talents and delivering impactful
            solutions across communities.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/about">
              <Button variant="default">Learn More</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <div className="w-full aspect-video relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" // Replace with your image URL
              alt="MCI Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
