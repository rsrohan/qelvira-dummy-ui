import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  Boxes,
  Wrench,
  ShoppingBag,
  Receipt,
  Settings,
  Leaf,
} from "lucide-react"
import { hotel } from "../data/mockData"

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/inventory", label: "Inventory & Rooms", icon: Boxes },
  { to: "/maintenance", label: "Maintenance", icon: Wrench },
  { to: "/marketplace", label: "Marketplace", icon: ShoppingBag },
  { to: "/orders", label: "Orders & Billing", icon: Receipt },
  { to: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white h-screen sticky top-0">
      <div className="flex items-center gap-2 px-5 h-16 border-b border-slate-200">
        <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
          <Leaf size={18} />
        </div>
        <span className="font-semibold text-slate-900 text-lg">Qelvira</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-slate-200">
        <div className="rounded-lg bg-slate-50 px-3 py-3">
          <p className="text-xs font-medium text-slate-500">Logged in as</p>
          <p className="text-sm font-semibold text-slate-900">{hotel.name}</p>
          <p className="text-xs text-slate-500">{hotel.plan}</p>
        </div>
      </div>
    </aside>
  )
}
