"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function JoinUsPage() {
  const occupations = [
    "Student",
    "Professional",
    "Entrepreneur",
    "Educator",
    "Artist",
    "Technician",
    "Other",
  ];

  const [loading, setLoading] = useState(false);
  const [occupation, setOccupation] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      surname: formData.get("surname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      department: formData.get("department"),
      talent: formData.get("talent"),
      referralName: formData.get("referralName"),
      referralPhone: formData.get("referralPhone"),
      occupation: formData.get("occupation"),
      dob: formData.get("dob"),
    };

    console.log(payload);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Registration successful!");
    form.reset();
    setOccupation("");
    setLoading(false);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')`,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center max-w-3xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Community
            </h1>
            <p className="text-[14px] md:text-base text-gray-200">
              Register to become part of MCI&apos;s growing network
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Registration Form */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname">Surname *</Label>
                  <Input
                    id="surname"
                    name="surname"
                    placeholder="Your surname"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234 123 456 7890"
                  required
                />
              </div>

              {/* Occupation and Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Occupation *</Label>
                  <Select
                    onValueChange={setOccupation}
                    value={occupation}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      {occupations.map((occ) => (
                        <SelectItem key={occ} value={occ}>
                          {occ}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="occupation" value={occupation} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    name="department"
                    placeholder="Enter your department"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input type="date" id="dob" name="dob" required />
              </div>

              {/* Talent/Skill */}
              <div className="space-y-2">
                <Label htmlFor="talent">Talent/Skill *</Label>
                <Input
                  id="talent"
                  name="talent"
                  placeholder="Your special talent or skill"
                  required
                />
              </div>

              {/* Referral Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="referralName">Referral Name</Label>
                  <Input
                    id="referralName"
                    name="referralName"
                    placeholder="Name of person who referred you"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referralPhone">Referral Phone Number</Label>
                  <Input
                    type="tel"
                    id="referralPhone"
                    name="referralPhone"
                    placeholder="Referral's phone number"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8 text-[14px] cursor-pointer md:text-base bg-[#0a63ad] hover:bg-[#094f8c] focus-visible:ring-[#0a63ad]"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register Now"}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
