"use client";
import { motion } from "framer-motion";

const HeroSection = () => (
  <motion.section
    className="relative h-[300px] bg-cover"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
    }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Discover Our Journey
        </h1>
        <p className="text-[14px] md:text-base text-gray-200">
          Empowering young people to realize their gifts and potentials since
          2014.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
