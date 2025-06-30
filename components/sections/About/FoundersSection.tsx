"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const founders = [
  {
    id: 1,
    name: "Dr. Adeola Johnson",
    role: "Co-Founder & Executive Director",
    bio: "Dr. Johnson is an education specialist with 20+ years experience. She leads MCI’s strategy and impactful programs.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80",
  },
]

const FoundersSection = () => (
  <motion.section
    className="py-16 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-white bg-primary">
          Our Leadership
        </Badge>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet The Visionaries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The passionate leaders who brought MCI to life and continue to steer its mission forward.
        </p>
      </motion.div>

      <div className="flex justify-center">
        {founders.map((f) => (
          <Card
            key={f.id}
            className="w-full max-w-md hover:shadow-xl transition duration-300"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-6 pb-2">
              <h3 className="text-xl font-bold">{f.name}</h3>
              <p className="text-blue-600 font-medium">{f.role}</p>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700">{f.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </motion.section>
)

export default FoundersSection
