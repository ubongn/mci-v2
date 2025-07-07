"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      className="pt-24 mt-4 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8"
      style={{ scrollMarginTop: "100px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          variants={fadeUpVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Building and Rebuilding Lives
          </h2>
          <p className="mt-4 text-base text-gray-700">
            MASTER’S CARE INTERNATIONAL (MCI), is a non-profit organization
            committed to reaching out to especially young people; to let them
            know that they can live meaningful, prosperous and successful lives.
          </p>
          <p className="mt-2 text-base  text-gray-700">
            MASTER’S CARE INTERNATIONAL (MCI), is a legally registered NGO
            (Non-Governmental Organization) with the Corporate Affairs
            Commission (CAC) of Nigeria, with Registration No: 67767, in 2014.
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
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
          variants={fadeUpVariants}
        >
          <div className="w-full aspect-video md:aspect-[16/10] relative rounded overflow-hidden shadow-lg">
            <Image
              src="/assets/images/tailor/t7.jpg"
              alt="MCI Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
