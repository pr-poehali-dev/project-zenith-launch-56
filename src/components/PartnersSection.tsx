import { Shield, Zap, Clock, Star, Map, Car, Smartphone } from "lucide-react"

const features = [
  { name: "5vito", icon: Star },
  { name: "GTA5RP", icon: Map },
  { name: "Dash App", icon: Smartphone },
  { name: "Быстрая аренда", icon: Zap },
  { name: "Весь автопарк", icon: Car },
  { name: "24/7 доступно", icon: Clock },
  { name: "Безопасно", icon: Shield },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {features.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-gray-500">
          <item.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{item.name}</span>
        </div>
      ))}
    </section>
  )
}