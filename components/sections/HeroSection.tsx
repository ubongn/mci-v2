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
      className="pt-20 pb-10 sm:pt-24 mt-8 sm:pb-16 px-4 sm:px-6 lg:px-8"
      style={{ scrollMarginTop: "100px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          variants={fadeUpVariants}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Building and Rebuilding Lives
          </h1>
          <p className="mt-4 text-[14px] md:text-base text-muted-foreground leading-relaxed">
            Master’s Care International (MCI) is a non-profit organization committed to empowering young people to live meaningful, prosperous, and successful lives — no matter their background or circumstances.
          </p>
          <p className="mt-3 text-[14px] md:text-base text-muted-foreground leading-relaxed">
            Legally registered with the Corporate Affairs Commission (CAC) of Nigeria since 2014 (Registration No: 67767), MCI continues to make a lasting impact through education, empowerment, and care.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto bg-[#1263b5] hover:bg-[#0f5298] text-white"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto"
                variant="outline"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          variants={fadeUpVariants}
        >
          <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[16/10] relative rounded-md overflow-hidden shadow-lg">
            <Image
              src="/assets/images/tailor/t7.jpg"
              alt="Master’s Care International"
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
