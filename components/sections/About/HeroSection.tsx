"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection = () => (
  <motion.section
         className="relative h-[300px]"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, ease: "easeOut" }}
       >
    <Image
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      alt="Team meeting"
      fill
      priority
      className="object-cover"
    />
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
          Empowering young people to realize their gifts and potentials since 2014.
        </p>
      </motion.div>
    </div>
  </motion.section>
)

export default HeroSection
