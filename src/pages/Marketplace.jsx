import { useMemo, useState } from "react"
import Layout from "../components/Layout"
import { products, productCategories } from "../data/mockData"
import { useCart } from "../context/CartContext"
import { Search, ShoppingCart, Star, Check } from "lucide-react"

export default function Marketplace() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const [added, setAdded] = useState({})
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = category === "All" || p.category === category
      const qOk = p.name.toLowerCase().includes(query.toLowerCase())
      return catOk && qOk
    })
  }, [category, query])

  const handleAdd = (product) => {
    addItem(product, product.moq)
    setAdded((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500)
  }

  return (
    <Layout title="Marketplace" subtitle="Order supplies directly from Qelvira">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-500 w-64">
          <Search size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="flex-1 outline-none placeholder:text-slate-400 text-slate-700"
          />
        </div>
        <div className="flex items-center gap-1 overflow-x-auto">
          {productCategories.map((c) => (
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
            <div className="h-28 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 text-xs mb-3">
              Product Image
            </div>
            <span className="text-[11px] font-medium text-brand-600 uppercase tracking-wide">{p.category}</span>
            <h3 className="text-sm font-semibold text-slate-900 mt-1">{p.name}</h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.description}</p>

            <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {p.rating} &middot; MOQ {p.moq} {p.unit}
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
              <p className="text-base font-semibold text-slate-900">
                ₹{p.price}
                <span className="text-xs font-normal text-slate-400">/{p.unit.replace(/s$/, "")}</span>
              </p>
              <button
                onClick={() => handleAdd(p)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  added[p.id] ? "bg-emerald-600 text-white" : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                {added[p.id] ? (
                  <>
                    <Check size={14} /> Added
                  </>
                ) : (
                  <>
                    <ShoppingCart size={14} /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
