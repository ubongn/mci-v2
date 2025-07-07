// components/sections/TestimonialSection.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Chidinma Okoro",
    role: "Graduate, Coding Academy",
    content:
      "Attending MCI’s Coding Academy changed my life. I never imagined I could build websites and apps. Today, I work as a front-end developer in Lagos thanks to what I learned there.",
    avatar: "/avatars/chidinma-okoro.jpg",
    initials: "CO",
  },
  {
    name: "Ibrahim Musa",
    role: "Beneficiary, Skill Acquisition Program",
    content:
      "Before MCI, I didn’t have a clear direction. The vocational training gave me tailoring skills and even startup tools. Now, I run my own small shop and train others too.",
    avatar: "/avatars/ibrahim-musa.jpg",
    initials: "IM",
  },
  {
    name: "Amaka Nwosu",
    role: "Alumna, Women Empowerment Initiative",
    content:
      "MCI empowered me to believe in myself and pursue my dreams. Their entrepreneurship classes and mentorship taught me how to start and grow my small business.",
    avatar: "/avatars/amaka-nwosu.jpg",
    initials: "AN",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Stories from Our Graduates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from those who have transformed their lives through Master’s Care International
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic text-[14px] md:text-base">
                  &apos;{testimonial.content}&apos;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
