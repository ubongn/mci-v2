"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section 
      className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8" 
      style={{ scrollMarginTop: '100px' }} // Adjust this value to match your navbar height
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Empowering the Next Generation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            MCI is dedicated to nurturing talents and delivering impactful
            solutions across communities.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/about" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto" variant="default">
                Learn More
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="w-full aspect-video md:aspect-[16/10] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="MCI Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;