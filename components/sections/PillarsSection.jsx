"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  Hammer,
  Users,
  ArrowRight,
  Goal,
  Globe,
} from "lucide-react";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut"  },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PillarsSection = () => {
  const pillars = [
    {
      title: "Education & Tech",
      description: "Our Coding Academy and ICT initiatives empowering digital futures",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      link: "/initiatives/education-tech",
    },
    {
      title: "Skill Acquisition",
      description: "Practical vocational training and entrepreneurship programs",
      icon: <Hammer className="w-8 h-8 text-green-600" />,
      link: "/initiatives/skill-acquisition",
    },
    {
      title: "UN SDGs Alignment",
      description: "Advancing Goals 1, 4, 5 & 8 through targeted programs",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      link: "/about/sdgs",
    },
  ];

  const sdgGoals = [
    {
      number: 1,
      title: "No Poverty",
      description: "Economic empowerment programs for disadvantaged youth",
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Inclusive and equitable technical education initiatives",
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Women in Tech and female leadership development",
    },
    {
      number: 8,
      title: "Decent Work",
      description: "Vocational training and job placement services",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Intro */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Pillars of MCI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core initiatives driving sustainable impact in Nigeria
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="group bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-0 hover:shadow-lg">
                <CardHeader className="items-center text-center">
                  <motion.div
                    className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    {pillar.icon}
                  </motion.div>
                  <CardTitle className="mt-6 text-xl font-semibold">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="mt-2 px-4">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-primary mt-2 group-hover:underline"
                    >
                      Explore Initiative
                      <motion.span
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="ml-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* SDG Goals Section */}
        <motion.div
          className="bg-blue-50/50 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* SDG Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full shadow-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Goal className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium text-blue-600">
                UN Sustainable Development Goals
              </span>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">
              Our Commitment to Global Goals
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How MCI programs directly contribute to achieving the UN SDGs
            </p>
          </motion.div>

          {/* SDG Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {sdgGoals.map((goal) => (
              <motion.div key={goal.number} variants={item}>
                <Card className="bg-white hover:shadow-md transition-all">
                  <CardHeader>
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold mr-3">
                        {goal.number}
                      </div>
                      <CardTitle className="text-lg">{goal.title}</CardTitle>
                    </motion.div>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                Learn More About Our SDG Contributions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Final CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Explore All Initiatives
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
