// app/galleries/page.tsx
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const galleryCategories = [
  {
    id: 1,
    title: "Youth Programs",
    description: "Our impactful youth development initiatives in action",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    count: 24
  },
  {
    id: 2,
    title: "Training Sessions",
    description: "Skill-building workshops and training programs",
    coverImage: "https://images.unsplash.com/photo-1524179091875-b4949861b4d7",
    count: 18
  },
  {
    id: 3,
    title: "Community Events",
    description: "Our engagements with local communities",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    count: 32
  },
  {
    id: 4,
    title: "Leadership Conferences",
    description: "Annual youth leadership summits",
    coverImage: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
    count: 12
  },
  {
    id: 5,
    title: "Success Stories",
    description: "Transformations from our beneficiaries",
    coverImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    count: 27
  },
  {
    id: 6,
    title: "Team Activities",
    description: "Behind-the-scenes with our dedicated staff",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    count: 15
  }
]

export default function GalleriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Gallery showcase"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Our Galleries</h1>
            <p className="text-xl text-gray-200">
              Visual stories of impact and transformation
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((gallery) => (
              <div key={gallery.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to see more of our work?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for regular updates and behind-the-scenes content.
          </p>
          <Button className="px-8 py-4 text-lg">
            Follow Our Journey
          </Button>
        </div>
      </section>
    </main>
  )
}