"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryCategories = [
  {
    id: 1,
    title: "Youth Programs",
    description: "Our impactful youth development initiatives in action",
    coverImage: "/assets/images/image9.jpg",
    count: 24,
  },
  {
    id: 2,
    title: "Training Sessions",
    description: "Skill-building workshops and training programs",
    coverImage:
      "/assets/images/image5.jpg",
    count: 18,
  },
  {
    id: 3,
    title: "Community Events",
    description: "Our engagements with local communities",
    coverImage: "/assets/images/image8.jpg",
    count: 32,
  },
  {
    id: 4,
    title: "Leadership Conferences",
    description: "Annual youth leadership summits",
    coverImage: "/assets/images/image11.jpg",
    count: 12,
  },
  {
    id: 5,
    title: "Success Stories",
    description: "Transformations from our beneficiaries",
    coverImage: "/assets/images/image7.jpg",
    count: 27,
  },
  {
    id: 6,
    title: "Team Activities",
    description: "Behind-the-scenes with our dedicated staff",
    coverImage: "/assets/images/image3.jpg",
    count: 15,
  },
];

const GalleriesPage = () => {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center max-w-3xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Our Galleries
            </h1>
            <p className="text-[14px] md:text-base text-gray-200">
              Visual stories of impact and transformation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((gallery, i) => (
              <motion.div
                key={gallery.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={gallery.coverImage}
                    alt={gallery.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{gallery.title}</h3>
                  <p className="text-gray-200 mb-3">{gallery.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {gallery.count} photos
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/10"
                    >
                      View Gallery
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className=" text-2xl md:text-3xl font-bold mb-6">
            Want to see more of our work?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl text-[14px] md:text-base mx-auto">
            Follow us on social media for regular updates and behind-the-scenes
            content.
          </p>
          <Button className="px-8 py-4 text-[14px] md:text-base">
            Follow Our Journey
          </Button>
        </div>
      </motion.section>
    </main>
  );
};

export default GalleriesPage;
