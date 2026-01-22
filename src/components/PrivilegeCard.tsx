import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { LucideIcon } from "lucide-react"

interface PrivilegeCardProps {
  name: string
  price: number
  icon: string
  features: string[]
  popular?: boolean
}

export function PrivilegeCard({ name, price, icon, features, popular }: PrivilegeCardProps) {
  return (
    <div className={`relative rounded-2xl border p-6 transition-all hover:scale-105 ${
      popular 
        ? 'border-violet-500 bg-gradient-to-b from-violet-500/10 to-transparent' 
        : 'border-gray-800 bg-[#0f0f0f]'
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-violet-500 px-3 py-1 text-xs font-medium text-white">
            Популярная
          </span>
        </div>
      )}
      
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-lg p-2 ${popular ? 'bg-violet-500/20' : 'bg-gray-800'}`}>
          <Icon name={icon} size={24} className={popular ? 'text-violet-400' : 'text-gray-400'} />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">₽</span>
        </div>
        <p className="text-sm text-gray-500">Навсегда</p>
      </div>

      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <Icon name="Check" size={16} className="mt-0.5 shrink-0 text-violet-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full rounded-full ${
          popular 
            ? 'bg-violet-600 hover:bg-violet-700' 
            : 'bg-gray-800 hover:bg-gray-700'
        }`}
      >
        Купить {name}
      </Button>
    </div>
  )
}
