import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PrivilegesSection } from "@/components/PrivilegesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PrivilegesSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Xaoc World —{" "}
        <span className="font-medium text-white">твой путь к легенде начинается здесь</span>
      </footer>
    </main>
  )
}