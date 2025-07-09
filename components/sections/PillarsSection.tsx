"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SubItem = {
  subtitle: string;
  content: string;
};

type PillarItem = {
  title: string;
  subs: SubItem[];
};

const items: PillarItem[] = [
  {
    title: "Education & Tech",
    subs: [
      {
        subtitle: "Coding Academy",
        content: `At MCI, teaching coding as an NGO offers numerous benefits. 
It empowers individuals by providing digital literacy and problem-solving skills. 
By bridging the digital divide, it ensures equal opportunities for underprivileged communities. 
Coding enhances employability, opening up new career paths. It fosters creativity, critical thinking, 
and encourages entrepreneurship and innovation.`,
      },
      {
        subtitle: "Digital Literacy",
        content: `We equip participants with essential computer and internet skills to thrive in today’s digital world. 
These skills enable individuals to participate confidently in the digital economy, access vital information, 
and leverage technology for personal and professional growth.`,
      },
      {
        subtitle: "Entrepreneurship",
        content: `Our programs inspire innovation and teach students how to turn ideas into sustainable businesses. 
Participants learn business fundamentals, how to leverage technology effectively, and are encouraged to develop 
creative solutions to real-world challenges.`,
      },
    ],
  },
  {
    title: "Skill Acquisition",
    subs: [
      {
        subtitle: "Vocational Training",
        content: `Hands-on training in trades such as tailoring, carpentry, welding, and more to ensure self-sufficiency. 
Participants gain practical experience and skills that allow them to pursue gainful employment or start their own businesses.`,
      },
      {
        subtitle: "Business Support",
        content: `We provide mentorship, business planning guidance, and starter kits to help graduates establish and grow 
their own businesses. Our goal is to empower individuals to become self-reliant and economically independent.`,
      },
      {
        subtitle: "Fashion Designing",
        content: `We offer fashion designing skills which empower individuals to express creativity, develop artistic abilities, and create clothing and accessories. It leads to personal and financial growth through entrepreneurial opportunities and employment in the fashion industry. Additionally, it preserves traditional crafts and cultural heritage by blending local artistry and techniques into modern designs.`,
      },
      {
        subtitle: "Catering & Decoration",
        content: `We also offer skills in catering, craft, and decoration which provide various advantages. It empowers individuals economically by enabling them to generate income. It creates job opportunities in different sectors and encourages entrepreneurship, fostering innovation and self-reliance. Additionally, it contributes to the preservation of cultural heritage while promoting community development through collaboration and cooperation.`,
      },
      {
        subtitle: "MCI Driving School",
        content: `At MCI, teaching driving skills enhances mobility, independence, and access to job opportunities. It expands educational and social horizons and enables individuals to engage in activities not easily accessible by public transportation. Driving skills are valuable during emergencies, promoting effective response and assistance. Teaching safe driving practices contributes to road safety and accident reduction by instilling road regulations and responsible behavior.`,
      },
    ],
  },
  {
    title: "UN SDGs Alignment",
    subs: [
      {
        subtitle: "No Poverty (SDG 1)",
        content: `Our economic empowerment programs aim to lift youth and families out of poverty. 
Through education, skills training, and support, we provide pathways to financial stability and improved living standards.`,
      },
      {
        subtitle: "Quality Education (SDG 4)",
        content: `Promoting inclusive and equitable education through our educational initiatives. 
We ensure that underprivileged individuals have access to quality learning opportunities, fostering lifelong learning.`,
      },
      {
        subtitle: "Gender Equality (SDG 5)",
        content: `Supporting women and girls through focused training and leadership programs. 
We advocate for equal opportunities and empower women to actively participate in economic and social development.`,
      },
      {
        subtitle: "Decent Work & Growth (SDG 8)",
        content: `Encouraging entrepreneurship and providing pathways to decent jobs for youth. 
Our programs foster economic growth by equipping participants with market-relevant skills and promoting fair work practices.`,
      },
    ],
  },
  {
    title: "Philanthropy",
    subs: [
      {
        subtitle: "Community Support",
        content: `Through our philanthropic initiatives, we extend help to vulnerable communities by providing food, clothing, healthcare, and educational materials. Our aim is to improve the quality of life and foster hope for those in need.`,
      },
      {
        subtitle: "Disaster Relief",
        content: `We respond to natural and man-made disasters by providing emergency relief and rehabilitation support to affected individuals and families. This includes shelter, supplies, and long-term rebuilding efforts.`,
      },
      {
        subtitle: "Health & Wellness",
        content: `We organize medical outreaches, awareness campaigns, and provide access to essential healthcare services. Our focus is on promoting physical and mental well-being in underserved communities.`,
      },
    ],
  },
];

const PillarsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Badge variant="outline" className="mb-4 font-bold text-sm">
              Our Initiatives
            </Badge>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Explore our Pillars
          </h2>
          <p className="text-muted-foreground md:max-w-2xl text-[14px] md:text-base mx-auto">
            Hover or tap on a pillar to learn more about it.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Nav */}
          <div className="w-full= md:w-1/3 space-y-2">
            {items.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  variant={activeIndex === index ? "default" : "outline"}
                  className={`md:w-full w-1/2 justify-start cursor-pointer text-left ${
                    activeIndex === index
                      ? "bg-[#0a63ad] text-white hover:bg-[#0e4e90]"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 min-h-[570px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{items[activeIndex].title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4 overflow-y-auto">
                    <div className="space-y-4 text-muted-foreground">
                      {items[activeIndex].subs.map((sub, idx) => (
                        <div key={idx} className="space-y-1">
                          <h4 className="text-lg font-semibold text-foreground">
                            {sub.subtitle}
                          </h4>
                          <p className="text-[14px] md:text-base">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <div className="relative w-full py-48 overflow-hidden mt-4 flex items-center justify-center">
                      {items[activeIndex].image ? (
                        <Image
                          src={items[activeIndex].image}
                          alt={items[activeIndex].title}
                          fill
                          className="object-contain"
                          priority
                        />
                      ) : (
                        <span className="text-gray-400">
                          No image available
                        </span>
                      )}
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
