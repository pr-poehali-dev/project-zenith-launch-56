import { Car, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const cars = [
  { name: "Pfister Comet", info: "Спорткар · 2 места", code: "250₽/ч", color: "bg-red-700" },
  { name: "Benefactor Schafter", info: "Бизнес-класс · 4 места", code: "180₽/ч", color: "bg-blue-700" },
  { name: "Declasse Tulip", info: "Седан · 4 места", code: "120₽/ч", color: "bg-teal-600" },
  { name: "Vapid Ellie", info: "Мускулкар · 2 места", code: "200₽/ч", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Car className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Весь автопарк в одном месте</h3>
      <p className="mb-4 text-sm text-gray-400">Выбирай из десятков машин любого класса — от бюджетных до суперкаров прямо в Dash</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть все авто <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {cars.map((car, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full ${car.color} flex items-center justify-center`}>
                <Car className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{car.name}</p>
                <p className="text-xs text-gray-500">{car.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-medium">{car.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Открыть каталог
        </Button>
      </div>
    </div>
  )
}
