// components/sections/TestimonialSection.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechSolutions Inc.",
    content: "MCI transformed our digital infrastructure completely. Their team delivered beyond our expectations with innovative solutions that boosted our productivity by 40%.",
    avatar: "/avatars/sarah-johnson.jpg",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Working with MCI was a game-changer for our campaigns. Their data-driven approach helped us increase customer engagement significantly.",
    avatar: "/avatars/michael-chen.jpg",
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GreenStart",
    content: "The MCI team understood our vision perfectly. Their sustainable tech solutions aligned exactly with our company values and goals.",
    avatar: "/avatars/emily-rodriguez.jpg",
    initials: "ER"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed with our solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}