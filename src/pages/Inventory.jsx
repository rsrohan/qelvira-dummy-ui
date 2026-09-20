import { useMemo, useState } from "react"
import Layout from "../components/Layout"
import Badge, { statusColor } from "../components/Badge"
import { rooms, floors, inventoryItems, inventoryCategories } from "../data/mockData"
import { Search, SlidersHorizontal } from "lucide-react"

const roomStatusLabel = {
  occupied: "Occupied",
  vacant: "Vacant",
  cleaning: "Cleaning",
  maintenance: "Maintenance",
}

function RoomsTab() {
  const [floorFilter, setFloorFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")

  const filtered = useMemo(() => {
    return rooms.filter((r) => {
      const floorOk = floorFilter === "All" || r.floor === floorFilter
      const statusOk = statusFilter === "All" || r.status === statusFilter
      return floorOk && statusOk
    })
  }, [floorFilter, statusFilter])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={floorFilter}
          onChange={(e) => setFloorFilter(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
        >
          <option>All</option>
          {floors.map((f) => (
            <option key={f.id}>{f.name}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700"
        >
          <option value="All">All statuses</option>
          {Object.entries(roomStatusLabel).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-4 ml-auto text-xs text-slate-500">
          {Object.entries(roomStatusLabel).map(([key, label]) => (
            <span key={key} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${
                { occupied: "bg-blue-500", vacant: "bg-emerald-500", cleaning: "bg-amber-500", maintenance: "bg-rose-500" }[key]
              }`} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filtered.map((room) => (
          <div
            key={room.id}
            className="rounded-lg border border-slate-200 bg-white p-3 hover:shadow-sm transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">{room.number}</p>
              <span
                className={`h-2 w-2 rounded-full ${
                  { occupied: "bg-blue-500", vacant: "bg-emerald-500", cleaning: "bg-amber-500", maintenance: "bg-rose-500" }[room.status]
                }`}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">{room.type}</p>
            <p className="text-xs text-slate-400">{roomStatusLabel[room.status]}</p>
            {!room.suppliesOk && (
              <p className="text-[10px] font-medium text-rose-600 mt-1.5">Supplies low</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function SuppliesTab() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return inventoryItems.filter((i) => {
      const catOk = category === "All" || i.category === category
      const qOk = i.name.toLowerCase().includes(query.toLowerCase()) || i.sku.toLowerCase().includes(query.toLowerCase())
      return catOk && qOk
    })
  }, [category, query])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-500 w-full sm:w-64">
          <Search size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search item or SKU"
            className="flex-1 min-w-0 outline-none placeholder:text-slate-400 text-slate-700"
          />
        </div>
        <div className="flex items-center gap-1 overflow-x-auto">
          {inventoryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                category === c ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="ml-auto flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
          <SlidersHorizontal size={14} /> Sort
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b border-slate-100 bg-slate-50">
              <th className="px-5 py-3 font-medium">Item</th>
              <th className="px-5 py-3 font-medium">SKU</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Reorder Level</th>
              <th className="px-5 py-3 font-medium">Unit Price</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((item) => {
              const low = item.stock < item.reorderAt
              return (
                <tr key={item.id}>
                  <td className="px-5 py-3 font-medium text-slate-900 whitespace-nowrap">{item.name}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{item.sku}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{item.category}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className={low ? "text-rose-600 font-semibold" : "text-slate-900"}>
                      {item.stock} {item.unit}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{item.reorderAt}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">₹{item.price}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    {low ? <Badge color="red">Reorder now</Badge> : <Badge color="green">Sufficient</Badge>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Inventory() {
  const [tab, setTab] = useState("rooms")

  return (
    <Layout title="Inventory & Rooms" subtitle="Track room status and supply stock levels">
      <div className="flex gap-1 border-b border-slate-200">
        {[
          { key: "rooms", label: "Rooms" },
          { key: "supplies", label: "Supplies" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t.key ? "border-brand-600 text-brand-700" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "rooms" ? <RoomsTab /> : <SuppliesTab />}
    </Layout>
  )
}
