"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, Globe } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Using 'react-intersection-observer' for simplicity

// Counter component with animation
const AnimatedCounter = ({
  value,
  text,
  isYear = false,
}: {
  value: number;
  text: string;
  isYear?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });

      let current = 0;
      // Adjust increment speed based on value for smoother animation for larger numbers
      const increment = value / 60; // Increased steps for smoother animation

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, 15); // Slightly faster interval

      return () => clearInterval(timer);
    }
  }, [inView, value, controls]);

  const displayValue = isYear
    ? `${count}`
    : count >= 1000
    ? `${count.toLocaleString()}+`
    : `${count}`;

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {displayValue} {text}
    </motion.span>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  // Renamed ref to statsSectionRef for clarity
  const [statsSectionRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (statsInView) {
      controls.start("visible");
    }
  }, [controls, statsInView]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team meeting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              Discover Our Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Empowering young people to realize their gifts and potentials
              since 2014.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-primary-foreground bg-primary hover:bg-primary/90"
              >
                Our Story
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Developing the next generation of leaders
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                **MCI (stands for Mentoring, Coaching, and Inspiring)** is a
                non-profit organization committed to identifying and nurturing
                talents in young people through innovative programs, mentorship,
                and leadership development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since our establishment in **2014**, we&apos;ve impacted
                thousands of youths across Nigeria, helping them discover their
                purpose and develop essential skills for a brighter future. We
                believe every young person has the potential to lead and make a
                significant difference in their communities.
              </p>
            </motion.div>
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Youth development program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-16 pt-16 border-t border-gray-200 grid md:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <Badge
                variant="outline"
                className="mb-4 text-primary-foreground bg-primary hover:bg-primary/90"
              >
                Our Vision
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                A Future Shaped by Empowered Youth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to build a society where every young person is
                equipped with the knowledge, skills, and character to lead,
                innovate, and contribute meaningfully to national development
                and beyond. We envision a future where youth are not just
                beneficiaries but active architects of positive change.
              </p>
            </div>
            <div>
              <Badge
                variant="outline"
                className="mb-4 text-primary-foreground bg-primary hover:bg-primary/90"
              >
                Our Values
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Integrity, Innovation, Impact
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>
                  **Integrity:** Upholding honesty and strong moral principles
                  in all our dealings.
                </li>
                <li>
                  **Innovation:** Continuously seeking new and effective ways to
                  empower youth.
                </li>
                <li>
                  **Impact:** Dedicated to creating measurable and sustainable
                  positive change.
                </li>
                <li>
                  **Excellence:** Striving for the highest standards in our
                  programs and operations.
                </li>
                <li>
                  **Collaboration:** Working together with communities,
                  partners, and youth for shared success.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 bg-primary text-white hover:bg-primary/90"
            >
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives Across Nigeria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Measurable results that showcase our commitment to youth
              empowerment
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Clock,
                value: new Date().getFullYear() - 2014,
                text: "Years",
                description: "Of dedicated service",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Users,
                value: 5000,
                text: "Youths",
                description: "Lives transformed",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Award,
                value: 12,
                text: "Programs",
                description: "Developed & implemented",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Globe,
                value: 6,
                text: "States",
                description: "Reached nationwide",
                color: "text-red-600",
                bg: "bg-red-50",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md rounded-xl overflow-hidden transition-all duration-300 h-full">
                  <div className={`${stat.bg} p-6 flex justify-center`}>
                    <stat.icon className={`w-14 h-14 ${stat.color}`} />
                  </div>
                  <CardHeader className="text-center px-6 pt-6 pb-2">
                    <h3 className="text-4xl font-extrabold text-gray-900">
                      <AnimatedCounter value={stat.value} text="" />
                    </h3>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-6 pt-0">
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                      {stat.text}
                    </p>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-500 text-sm">
              *Numbers updated as of{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary-foreground bg-primary hover:bg-primary/90"
            >
              Our Leadership
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Meet The Visionaries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate leaders who brought MCI to life and continue to
              steer its mission forward.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {founders.map((founder) => (
              <motion.div key={founder.id} 
              // variants={itemVariants}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                  <motion.div
                    className="relative aspect-square w-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <CardHeader className="p-6 pb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {founder.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{founder.role}</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-700 leading-relaxed">
                      {founder.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

const founders = [
  {
    id: 1,
    name: "Dr. Adeola Johnson",
    role: "Co-Founder & Executive Director",
    bio: "Dr. Adeola Johnson is an accomplished education specialist with over 20 years of experience dedicated to youth empowerment. Her vision for a transformed Nigerian youth landscape led to the establishment of MCI, where she continues to drive strategic initiatives and oversee its impactful programs.",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Chinedu Okoro",
    role: "Co-Founder & Programs Director",
    bio: "Chinedu Okoro is a dynamic social entrepreneur with a deep-rooted passion for creating systemic opportunities for young Nigerians to thrive. He co-founded MCI to bridge critical gaps in youth development, leveraging his expertise to design and implement innovative programs that foster leadership and practical skills.",
    image:
      "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?auto=format&fit=crop&w=800&q=80",
  },
];
