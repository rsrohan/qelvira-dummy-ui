import { Bell, Menu, Search, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { currentUser } from "../data/mockData"

export default function Topbar({ title, subtitle, cartCount = 0, onMenuClick }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-2 sm:gap-4 border-b border-slate-200 bg-white/80 backdrop-blur px-3 sm:px-4 md:px-8">
      <div className="flex items-center gap-2 min-w-0">
        <button
          onClick={onMenuClick}
          className="md:hidden -ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-semibold text-slate-900 truncate">{title}</h1>
          {subtitle && <p className="hidden sm:block text-xs text-slate-500 truncate">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3">
        <div className="hidden lg:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 w-56">
          <Search size={16} />
          <span>Search...</span>
        </div>

        <Link
          to="/marketplace/cart"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <button className="relative hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>

        <div className="flex items-center gap-2 pl-1.5 sm:pl-2 sm:border-l border-slate-200">
          <div className="h-8 w-8 shrink-0 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-semibold">
            {currentUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="hidden lg:block leading-tight">
            <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
            <p className="text-xs text-slate-500">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
