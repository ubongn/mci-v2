import HeroSection from "@/components/sections/About/HeroSection"
import MissionVision from "@/components/sections/About/MissionVision"
import StatsSection from "@/components/sections/About/StatsSection"
import FoundersSection from "@/components/sections/About/FoundersSection"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <MissionVision />
      <StatsSection />
      <FoundersSection />
    </main>
  )
}
