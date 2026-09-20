import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  Boxes,
  Wrench,
  ShoppingBag,
  Receipt,
  Settings,
  Leaf,
  X,
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

function SidebarContent({ onNavigate }) {
  return (
    <>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
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
    </>
  )
}

export default function Sidebar({ mobileOpen = false, onClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white h-screen sticky top-0">
        <div className="flex items-center gap-2 px-5 h-16 border-b border-slate-200">
          <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            <Leaf size={18} />
          </div>
          <span className="font-semibold text-slate-900 text-lg">Qelvira</span>
        </div>
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
        <aside
          className={`absolute left-0 top-0 h-full w-72 max-w-[85vw] bg-white flex flex-col shadow-xl transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-2 px-5 h-16 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Leaf size={18} />
              </div>
              <span className="font-semibold text-slate-900 text-lg">Qelvira</span>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1">
              <X size={20} />
            </button>
          </div>
          <SidebarContent onNavigate={onClose} />
        </aside>
      </div>
    </>
  )
}
