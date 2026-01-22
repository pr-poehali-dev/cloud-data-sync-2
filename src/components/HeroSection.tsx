import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">СЕРВЕР</span>
        <span className="text-gray-300">Эксклюзивные привилегии навсегда</span>
        <Icon name="Sparkles" size={16} className="text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Xaoc World — твой мир возможностей
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Выбери свою привилегию и открой уникальные возможности на лучшем Minecraft сервере. Покупка навсегда!</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white">
          Купить привилегию <Icon name="ShoppingCart" size={16} className="ml-2" />
        </Button>
        <Button 
          variant="outline" 
          className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800"
          onClick={() => window.open('https://discord.gg/4KaJydeDk9', '_blank')}
        >
          <Icon name="Users" size={16} className="mr-2" /> Наш Discord
        </Button>
      </div>
    </section>
  )
}