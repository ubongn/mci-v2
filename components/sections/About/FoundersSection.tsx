"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const founders = [
  {
    id: 1,
    name: "Mr Sunny Luther",
    role: "Founder",
    bio: `Mr Sunny Luther is a multi-faceted entrepreneur, philanthropist, and advocate for young minds. 
With a remarkable journey that spans the tech industry and the world of fashion, he has become a true inspiration 
for many aspiring individuals. Mr. Luther stands as a shining example of how one can harness diverse interests 
and passions to create a positive impact on society. His relentless dedication to nurturing young talents, 
whether in the realms of technology or fashion, reflects his belief in the potentials of the next generation. 
Through his ventures and philanthropy, Mr Luther continues to leave an enduring legacy, inspiring young minds 
to dream big and achieve even bigger, earlier. Mr. Sunny Luther is also the CEO of Assured Concept Ltd.`,
    image: "/assets/images/CEO.jpg",
  },
];

const FoundersSection = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleBio = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-bold text-sm">
            Our Leadership
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Meet The Visionaries
          </h2>
          <p className="text-gray-600 max-w-2xl text-[14px] md:text-base mx-auto">
            The passionate leaders who brought MCI to life and continue to steer
            its mission forward.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex justify-center">
          {founders.map((f) => (
            <Card
              key={f.id}
              onClick={() => toggleBio(f.id)}
              className="group w-full max-w-4xl hover:shadow-xl transition duration-300 overflow-hidden flex flex-col md:flex-row cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-110 origin-top"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between bg-white p-6 w-full md:w-1/2">
                <div>
                  <h3 className="text-xl font-bold">{f.name}</h3>
                  <p className="text-blue-600 font-medium">{f.role}</p>
                </div>

                <div
                  className={`
                    relative overflow-hidden mt-4 text-[14px] md:text-base
                    md:max-h-32 opacity-80
                    group-hover:max-h-[1000px] group-hover:opacity-100
                    ${expanded[f.id] ? "md:max-h-[1000px] opacity-100" : ""}
                    transition-all duration-500 ease-in-out
                  `}
                >
                  <p className="text-gray-700">{f.bio}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FoundersSection;
