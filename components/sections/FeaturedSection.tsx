import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Rocket, Users, BarChart, ArrowRight } from 'lucide-react'

const FeaturedSection = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description: "Cutting-edge technology tailored to your business needs",
      icon: <Rocket className="w-8 h-8 text-primary" />
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with industry expertise",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations",
      icon: <BarChart className="w-8 h-8 text-primary" />
    }
  ]

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose MCI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our unique approach delivers exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/30"
            >
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 group-hover:text-primary"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="cursor-pointer hover:scale-105 transition-transform">
            <Rocket className="mr-2 h-4 w-4" />
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection