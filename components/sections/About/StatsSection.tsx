"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, Globe } from "lucide-react"
import { useEffect, useState } from "react"

const Stats = [
  { icon: Clock, value: new Date().getFullYear() - 2014, label: "Years", desc: "Of dedicated service" },
  { icon: Users, value: 5000, label: "Youths", desc: "Lives transformed" },
  { icon: Award, value: 12, label: "Programs", desc: "Developed & implemented" },
  { icon: Globe, value: 6, label: "States", desc: "Reached nationwide" },
]

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let curr = 0
    const interval = setInterval(() => {
      curr += Math.ceil(value / 50)
      if (curr >= value) {
        setCount(value)
        clearInterval(interval)
      } else setCount(curr)
    }, 20)
    return () => clearInterval(interval)
  }, [inView, value])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const StatsSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-4 bg-primary text-white">
          Our Impact
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transforming Lives Across Nigeria
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Measurable results that showcase our commitment to youth empowerment.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Stats.map((stat, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="h-full">
            <Card className="rounded-xl shadow hover:shadow-lg transition-all">
              <div className="p-6 flex justify-center bg-gray-100">
                <stat.icon className="h-12 w-12 text-primary" />
              </div>
              <CardHeader className="text-center px-6 pt-6 pb-2">
                <h3 className="text-4xl font-extrabold text-gray-900">
                  <AnimatedCounter value={stat.value} />
                </h3>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 pt-0">
                <p className="text-xl font-semibold text-gray-800">{stat.label}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsSection
