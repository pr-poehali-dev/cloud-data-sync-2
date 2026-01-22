import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const privileges = [
  {
    id: "starter",
    name: "Starter",
    price: 50,
    color: "bg-emerald-500",
    description: "Базовые команды, чат, бонус",
    commands: ["/kit starter", "/home set", "/back"],
  },
  {
    id: "deluxe",
    name: "Deluxe",
    price: 100,
    color: "bg-blue-500",
    description: "Всё из Starter + слоты, /kit, /warp",
    commands: ["/fly", "/heal", "/god", "/kit vip"],
  },
  {
    id: "vip",
    name: "VIP",
    price: 130,
    color: "bg-purple-500",
    description: "Префикс, миры, бонусы",
    commands: ["/fly", "/heal", "/god", "/kit vip", "/tp", "/tphere"],
  },
  {
    id: "legend",
    name: "Premium",
    price: 150,
    color: "bg-violet-500",
    description: "Эффекты, кейсы, команды",
    commands: ["/fly", "/heal", "/god", "/kit premium", "/vanish"],
  },
]

const paymentMethods = [
  { id: "card", name: "Банковская карта", icon: "CreditCard" },
  { id: "yoomoney", name: "ЮMoney", icon: "Wallet" },
  { id: "qiwi", name: "QIWI", icon: "Smartphone" },
  { id: "crypto", name: "Криптовалюта", icon: "Bitcoin" },
]

export function PurchaseSection() {
  const [selectedPrivilege, setSelectedPrivilege] = useState(privileges[2])
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0])
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Левая колонка - Выбор привилегии */}
          <div className="rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gray-800 p-2">
                <Icon name="ShoppingBag" size={20} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Выбери свою привилегию
              </h3>
            </div>

            <p className="mb-6 text-sm text-gray-400">
              Каждый ранг открывает уникальные команды и возможности на сервере
            </p>

            <div className="space-y-3">
              {privileges.map((privilege) => (
                <button
                  key={privilege.id}
                  onClick={() => setSelectedPrivilege(privilege)}
                  className={cn(
                    "w-full rounded-xl border p-4 text-left transition-all hover:scale-[1.02]",
                    selectedPrivilege.id === privilege.id
                      ? "border-violet-500 bg-violet-500/10"
                      : "border-gray-800 bg-[#0a0a0a] hover:border-gray-700"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("h-10 w-10 rounded-lg", privilege.color)} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">
                          {privilege.name}
                        </span>
                        <span className="text-lg font-bold text-white">
                          {privilege.price}₽
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        {privilege.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}

              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-700 bg-transparent py-3 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-gray-300">
                <Icon name="Plus" size={16} />
                Сравнить привилегии
              </button>
            </div>
          </div>

          {/* Центральная колонка - Команды */}
          <div className="rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gray-800 p-2">
                <Icon name="Terminal" size={20} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Эксклюзивные команды
              </h3>
            </div>

            <p className="mb-6 text-sm text-gray-400">
              Получи доступ к мощным возможностям: киты, полёты, телепорты и многое другое
            </p>

            <div className="mb-6 rounded-xl border border-gray-800 bg-[#0a0a0a] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("h-8 w-8 rounded-lg", selectedPrivilege.color)} />
                  <span className="font-semibold text-white">
                    Ранг: {selectedPrivilege.name}
                  </span>
                </div>
                <button className="text-sm text-violet-400 hover:text-violet-300">
                  Продлить
                </button>
              </div>

              <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                <Icon name="Info" size={14} />
                <span>Доступные команды</span>
              </div>

              <div className="space-y-2">
                {selectedPrivilege.commands.map((cmd, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-[#0f0f0f] px-3 py-2 font-mono text-sm text-violet-300"
                  >
                    <Icon name="ChevronRight" size={14} className="text-gray-600" />
                    {cmd}
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Неограниченное использование всех команд
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-violet-500/10 to-transparent p-4">
              <div className="mb-2 flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-violet-400" />
                <span className="font-semibold text-white">Стартовый набор</span>
              </div>
              <p className="text-sm text-gray-400">Броня + оружие + ресурсы при первом входе</p>
              <Button className="mt-3 w-full rounded-lg bg-violet-600 hover:bg-violet-700">
                Активировать команды
              </Button>
            </div>
          </div>

          {/* Правая колонка - Оплата */}
          <div className="rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gray-800 p-2">
                <Icon name="CreditCard" size={20} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Быстрая оплата</h3>
            </div>

            <p className="mb-6 text-sm text-gray-400">
              Приобретай привилегии за пару кликов — безопасно и мгновенно
            </p>

            {/* Выбор привилегии */}
            <div className="mb-6">
              <Label className="mb-2 text-sm text-gray-400">
                Выберите привилегию
              </Label>
              <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("h-10 w-10 rounded-lg", selectedPrivilege.color)} />
                    <div>
                      <div className="font-semibold text-white">
                        {selectedPrivilege.name}
                      </div>
                      <div className="text-xs text-gray-400">Навсегда</div>
                    </div>
                  </div>
                  <Icon name="ChevronDown" size={20} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Никнейм */}
            <div className="mb-4">
              <Label htmlFor="nickname" className="mb-2 text-sm text-gray-400">
                Ваш никнейм <span className="text-red-400">*</span>
              </Label>
              <Input
                id="nickname"
                placeholder="Steve_2077"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="rounded-lg border-gray-800 bg-[#0a0a0a] text-white placeholder:text-gray-600"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <Label htmlFor="email" className="mb-2 text-sm text-gray-400">
                Email чека <span className="text-xs text-gray-600">(Необязательно)</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-gray-800 bg-[#0a0a0a] text-white placeholder:text-gray-600"
              />
            </div>

            {/* Способы оплаты */}
            <div className="mb-6">
              <Label className="mb-2 text-sm text-gray-400">Способы оплаты</Label>
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg border p-3 transition-all",
                      selectedPayment.id === method.id
                        ? "border-violet-500 bg-violet-500/10"
                        : "border-gray-800 bg-[#0a0a0a] hover:border-gray-700"
                    )}
                  >
                    <Icon
                      name={method.icon}
                      size={18}
                      className={
                        selectedPayment.id === method.id
                          ? "text-violet-400"
                          : "text-gray-400"
                      }
                    />
                    <span className="text-sm text-white">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Кнопка оплаты */}
            <Button className="mb-4 w-full rounded-lg bg-violet-600 py-6 text-base font-semibold hover:bg-violet-700">
              <Icon name="ShieldCheck" size={18} className="mr-2" />
              Привилегия выдается навсегда
            </Button>

            <p className="text-center text-xs text-gray-500">
              Оплачивая, вы соглашаетесь с правилами сервера
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
