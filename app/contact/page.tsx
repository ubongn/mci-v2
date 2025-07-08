"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const contactInfo = {
    emails: ["info@mci.org"],
    phones: ["+234 903 977 0981"],
    address: [
      "Plot 234, Opposite Gifted Secondary School, Phase 2 Gwagwalada, ",
      "Abuja FCT, Nigeria",
    ],
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget; // <--- capture the form element once
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    console.log({ name, email, subject, message });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!");

    form.reset(); // <--- now safe because form is guaranteed
    setLoading(false);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        className="relative h-[300px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Contact us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
           
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center max-w-3xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-[14px] md:text-base text-gray-200">
              Get in touch with our team
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-8 text-[14px] cursor-pointer md:text-base bg-[#0a63ad] hover:bg-[#094f8c] focus-visible:ring-[#0a63ad]"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div>
                <h2 className=" text-xl md:text-2xl font-bold mb-6">
                  Our information
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      icon: <Mail className="w-5 h-5 text-primary" />,
                      title: "Email",
                      items: contactInfo.emails,
                    },
                    {
                      icon: <Phone className="w-5 h-5 text-primary" />,
                      title: "Phone",
                      items: contactInfo.phones,
                    },
                    {
                      icon: <MapPin className="w-5 h-5 text-primary" />,
                      title: "Address",
                      items: contactInfo.address,
                    },
                  ].map((info, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: i * 0.1,
                      }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">
                          {info.title}
                        </h3>
                        {info.items.map((line, j) => (
                          <p
                            key={j}
                            className="text-gray-600 text-[14px] md:text-base"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Section */}
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.608139548622!2d7.070444515195351!3d8.940882993593836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e98f16a0533e3%3A0x7b1e0862ddc39f8e!2sPhase%202%20Gwagwalada%2C%20Abuja!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                    width="100%"
                    height="250"
                    className="rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
