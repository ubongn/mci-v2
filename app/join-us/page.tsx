// app/join-us/page.tsx
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

export default function JoinUsPage() {
  const occupations = [
    "Student",
    "Professional",
    "Entrepreneur",
    "Educator",
    "Artist",
    "Technician",
    "Other"
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Join our community"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Join Our Community</h1>
            <p className="text-xl text-gray-200">
              Register to become part of MCI&apos;s growing network
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname">Surname *</Label>
                  <Input 
                    id="surname" 
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
                  placeholder="your@email.com" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  placeholder="+234 123 456 7890" 
                  required 
                />
              </div>

              {/* Occupation and Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Occupation *</Label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select Occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Input 
                    id="department" 
                    placeholder="Enter your department" 
                    required 
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Talent/Skill */}
              <div className="space-y-2">
                <Label htmlFor="talent">Talent/Skill *</Label>
                <Input 
                  id="talent" 
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
                    placeholder="Name of person who referred you" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referralPhone">Referral Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="referralPhone" 
                    placeholder="Referral's phone number" 
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-8 py-6 text-lg">
                Register Now
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}