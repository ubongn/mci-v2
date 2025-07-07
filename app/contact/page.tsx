// app/contact/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  // Ensure all dynamic data is consistent between server and client
  const contactInfo = {
    emails: ["info@mci.org", "support@mci.org"],
    phones: ["+234 123 456 7890", "+234 987 654 3210"],
    address: ["123 Youth Development Avenue", "Lagos, Nigeria"],
    hours: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 2pm"],
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section - Fixed with priority image and explicit dimensions */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Contact us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={80}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-[14px] md:text-base text-gray-200">
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full text-[14px] md:text-base">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info - Using consistent data */}
            <div className="space-y-12">
              <div>
                <h2 className=" text-xl md:text-2xl font-bold mb-6">Our information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      {contactInfo.emails.map((email, i) => (
                        <p key={i} className="text-gray-600 text-[14px] md:text-base">
                          {email}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      {contactInfo.phones.map((phone, i) => (
                        <p key={i} className="text-gray-600 text-[14px] md:text-base">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Address</h3>
                      {contactInfo.address.map((line, i) => (
                        <p key={i} className="text-gray-600 text-[14px] md:text-base">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">
                        Working Hours
                      </h3>
                      {contactInfo.hours.map((hour, i) => (
                        <p key={i} className="text-gray-600 text-[14px] md:text-base">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
