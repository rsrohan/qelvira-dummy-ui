import { useState } from "react"
import Layout from "../components/Layout"
import Badge, { statusColor } from "../components/Badge"
import { orders, invoices } from "../data/mockData"
import { Download } from "lucide-react"

export default function Orders() {
  const [tab, setTab] = useState("orders")

  return (
    <Layout title="Orders & Billing" subtitle="Track supply orders, invoices and payments">
      <div className="flex gap-1 border-b border-slate-200">
        {[
          { key: "orders", label: "Order History" },
          { key: "invoices", label: "Invoices" },
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

      {tab === "orders" ? (
        <div className="rounded-xl border border-slate-200 bg-white overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">ETA</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="px-5 py-3 font-medium text-slate-900 whitespace-nowrap">{o.id}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{o.date}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{o.items} items</td>
                  <td className="px-5 py-3 text-slate-900 whitespace-nowrap">₹{o.total.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{o.eta}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <Badge color={statusColor[o.status]}>{o.status}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <button className="text-xs font-medium text-brand-600 hover:text-brand-700">Track</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 font-medium">Invoice ID</th>
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="px-5 py-3 font-medium text-slate-900 whitespace-nowrap">{inv.id}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{inv.order}</td>
                  <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{inv.date}</td>
                  <td className="px-5 py-3 text-slate-900 whitespace-nowrap">₹{inv.amount.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <Badge color={statusColor[inv.status]}>{inv.status}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <button className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 ml-auto">
                      <Download size={13} /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  )
}
