// app/about/page.tsx
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team meeting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl font-bold text-white mb-4">About MCI</h1>
            <p className="text-xl text-gray-200">
              Empowering young people to realize their gifts and potentials since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Developing the next generation of leaders
              </h2>
              <p className="text-gray-600 mb-6">
                MCI is a non-profit organization committed to identifying and nurturing 
                talents in young people through innovative programs and mentorship.
              </p>
              <p className="text-gray-600">
                Since our establishment in 2014, we&apos;ve impacted thousands of youths across 
                Nigeria, helping them discover their purpose and develop essential skills 
                for the future.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Youth development program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className="border-0 shadow-none">
              <CardHeader className="flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">9+ Years</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Of dedicated service</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardHeader className="flex items-center justify-center">
                <Users className="w-10 h-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">5,000+</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Youths impacted</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardHeader className="flex items-center justify-center">
                <Award className="w-10 h-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">12</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Programs developed</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardHeader className="flex items-center justify-center">
                <Globe className="w-10 h-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">6</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">States reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to youth development and empowerment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Dr. Adeola Johnson",
    role: "Executive Director",
    bio: "Education specialist with 15+ years experience in youth development programs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
  },
  {
    id: 2,
    name: "Chinedu Okoro",
    role: "Programs Manager",
    bio: "Passionate about creating opportunities for young people to thrive.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: 3,
    name: "Amina Mohammed",
    role: "Partnerships Lead",
    bio: "Connects MCI with organizations that share our vision for youth empowerment.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  }
]