import { PrivilegeCard } from "@/components/PrivilegeCard"

const privileges = [
  {
    name: "Стартер",
    price: 50,
    icon: "Leaf",
    features: [
      "Базовые команды для игры",
      "Доступ к чату и форуму",
      "Приветственный бонус",
    ]
  },
  {
    name: "Делюкс",
    price: 100,
    icon: "Gem",
    features: [
      "Всё из Стартер",
      "Дополнительные слоты инвентаря",
      "Приоритет входа на сервер",
      "Цветной ник в чате",
    ]
  },
  {
    name: "ВИП",
    price: 130,
    icon: "Crown",
    features: [
      "Всё из Делюкс",
      "VIP-префикс в игре",
      "Доступ к эксклюзивным мирам",
      "Ежедневные бонусы",
    ]
  },
  {
    name: "Легенда",
    price: 150,
    icon: "Sword",
    features: [
      "Всё из ВИП",
      "Уникальные эффекты частиц",
      "Доступ к легендарным кейсам",
      "Больше команд и возможностей",
      "Персональный префикс",
    ],
    popular: true
  },
  {
    name: "Император",
    price: 200,
    icon: "Sceptre",
    features: [
      "Всё из Легенда",
      "Расширенные права модерации",
      "Кастомные эмоции и анимации",
      "Доступ к императорским ресурсам",
      "VIP поддержка",
    ]
  },
  {
    name: "Блатной",
    price: 250,
    icon: "Trophy",
    features: [
      "Всё из Император",
      "Максимальные привилегии без прав админа",
      "Уникальные команды и скины",
      "Приоритетная поддержка 24/7",
      "Эксклюзивные ивенты",
    ]
  },
  {
    name: "Бог",
    price: 350,
    icon: "Zap",
    features: [
      "Абсолютно ВСЕ возможности",
      "Бессмертие в PvP зонах",
      "Неограниченные ресурсы",
      "Персональный мир",
      "Легендарный статус навсегда",
      "Имя в списке спонсоров сервера",
    ]
  }
]

export function PrivilegesSection() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Выбери свою привилегию
          </h2>
          <p className="text-gray-400">
            Все привилегии покупаются навсегда — никаких подписок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {privileges.map((privilege) => (
            <PrivilegeCard key={privilege.name} {...privilege} />
          ))}
        </div>
      </div>
    </section>
  )
}
