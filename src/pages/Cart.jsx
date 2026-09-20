import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import { useCart } from "../context/CartContext"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function Cart() {
  const { items, updateQty, removeItem, subtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + gst

  const handleCheckout = () => {
    clearCart()
    navigate("/orders")
  }

  if (items.length === 0) {
    return (
      <Layout title="Cart" subtitle="Review items before checkout">
        <div className="rounded-xl border border-dashed border-slate-300 bg-white flex flex-col items-center justify-center py-20 text-center">
          <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <ShoppingBag size={22} />
          </div>
          <p className="text-sm font-medium text-slate-700">Your cart is empty</p>
          <p className="text-xs text-slate-500 mt-1">Browse the marketplace to add supplies.</p>
          <Link to="/marketplace" className="mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
            Go to Marketplace
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Cart" subtitle="Review items before checkout">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white divide-y divide-slate-100">
          {items.map((item) => (
            <div key={item.id} className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4">
              <div className="h-16 w-16 shrink-0 rounded-lg bg-slate-50 border border-slate-100" />
              <div className="flex-1 min-w-[10rem]">
                <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                <p className="text-xs text-slate-500">{item.category} &middot; ₹{item.price}/{item.unit.replace(/s$/, "")}</p>
              </div>
              <div className="flex items-center justify-between gap-4 w-full sm:w-auto pl-20 sm:pl-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 10)}
                    className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:bg-slate-50"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-slate-900">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 10)}
                    className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:bg-slate-50"
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <p className="sm:w-24 text-right text-sm font-semibold text-slate-900">
                  ₹{(item.qty * item.price).toLocaleString("en-IN")}
                </p>
                <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-rose-600 shrink-0">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <h2 className="font-semibold text-slate-900 text-sm mb-1">Order Summary</h2>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>GST (18%)</span>
            <span>₹{gst.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Delivery</span>
            <span className="text-emerald-600 font-medium">Free</span>
          </div>
          <div className="border-t border-slate-100 pt-3 flex justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 mt-2"
          >
            Place Order
          </button>
          <p className="text-xs text-slate-400 text-center">Billed to The Grand Meridian &middot; Net 15 terms</p>
        </div>
      </div>
    </Layout>
  )
}
