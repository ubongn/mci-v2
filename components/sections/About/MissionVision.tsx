"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const MissionVision = () => (
  <motion.section
    className="py-16 bg-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Mission + Image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Badge variant="outline" className="font-bold text-sm">
            Our Mission
          </Badge>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Developing the next generation of leaders
          </h2>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              To empower young people with the tools, mentorship, and mindset
              needed to discover their purpose early and confidently pursue
              meaningful life goals. To equip youth with relevant 21st-century
              skill sets that prepare them to thrive in a dynamic world and take
              bold steps toward their future from an early age.
            </p>
            <p>
              To harness ICT and innovation as drivers of early youth
              engagement, helping them explore opportunities, solve problems
              creatively, and build confidence in their unique paths. To nurture
              purpose-driven youth who lead with vision, act with intention, and
              contribute meaningfully to society.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full rounded-md overflow-hidden shadow-lg aspect-video sm:aspect-[4/3] md:aspect-[16/10]"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/image12.jpg"
            alt="MCI youth program"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>
      </div>

      {/* Vision + Values */}
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="space-y-4">
          <Badge variant="outline" className="font-bold text-sm">
            Our Vision
          </Badge>

          <h3 className="text-2xl font-bold text-gray-800">
            A future shaped by empowered youth
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Creating communities and societies where youths have a sense of
            direction and confidently pursue their life goals EARLY.
          </p>
        </div>

        <div className="space-y-4">
          <Badge variant="outline" className="font-bold text-sm">
            Our Values
          </Badge>

          <h3 className="text-2xl font-bold text-gray-800">
            Integrity, Innovation, Impact
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Integrity:</strong> We uphold honesty and strong moral
              principles.
            </li>
            <li>
              <strong>Innovation:</strong> We seek new and effective ways to
              empower youth.
            </li>
            <li>
              <strong>Impact:</strong> We create measurable and lasting
              transformation.
            </li>
            <li>
              <strong>Excellence:</strong> We maintain high standards in all we
              do.
            </li>
            <li>
              <strong>Collaboration:</strong> We partner with communities and
              youth for shared success.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default MissionVision;
