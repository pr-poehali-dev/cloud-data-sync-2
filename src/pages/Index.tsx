import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PurchaseSection } from "@/components/PurchaseSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PurchaseSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Xaoc World —{" "}
        <span className="font-medium text-white">твой путь к легенде начинается здесь</span>
      </footer>
    </main>
  )
}