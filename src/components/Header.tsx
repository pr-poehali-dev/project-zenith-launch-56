import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <DashLogo />
        <span className="text-lg font-semibold text-white">
          Dash<sup className="text-xs text-violet-400">by 5vito</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Автопарк
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Тарифы <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Как это работает
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          GTA5RP
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Открыть Dash
      </Button>
    </header>
  )
}

function DashLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="10" width="24" height="8" rx="4" fill="#8B5CF6" opacity="0.9"/>
      <circle cx="8" cy="14" r="3" fill="#ffffff" opacity="0.9"/>
      <circle cx="20" cy="14" r="3" fill="#ffffff" opacity="0.9"/>
      <rect x="6" y="6" width="16" height="4" rx="2" fill="#8B5CF6" opacity="0.5"/>
      <rect x="8" y="18" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.6"/>
      <rect x="16" y="18" width="4" height="4" rx="1" fill="#8B5CF6" opacity="0.6"/>
    </svg>
  )
}