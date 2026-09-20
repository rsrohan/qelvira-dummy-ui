import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { useCart } from "../context/CartContext"

export default function Layout({ title, subtitle, children }) {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex-1 min-w-0">
        <Topbar title={title} subtitle={subtitle} cartCount={count} onMenuClick={() => setMenuOpen(true)} />
        <main className="p-4 md:p-8 space-y-6">{children}</main>
      </div>
    </div>
  )
}
