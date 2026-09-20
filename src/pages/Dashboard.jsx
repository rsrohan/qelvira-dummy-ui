import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import StatCard from "../components/StatCard"
import Badge, { statusColor } from "../components/Badge"
import { kpis, stockAlerts, maintenanceRequests, orders, hotel, upcomingServices } from "../data/mockData"
import { AlertTriangle, ArrowRight, Sparkles } from "lucide-react"

export default function Dashboard() {
  return (
    <Layout title="Dashboard" subtitle={`Welcome back — ${hotel.name}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" />
              <h2 className="font-semibold text-slate-900 text-sm">Low Stock Alerts</h2>
            </div>
            <Link to="/inventory" className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View inventory <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {stockAlerts.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.item}</p>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-rose-600">
                    {item.stock} {item.unit}
                  </p>
                  <p className="text-xs text-slate-400">reorder at {item.reorderAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900 text-sm">Open Maintenance</h2>
            <Link to="/maintenance" className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {maintenanceRequests
              .filter((m) => m.status !== "Resolved")
              .slice(0, 4)
              .map((m) => (
                <div key={m.id} className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900">{m.room}</p>
                    <Badge color={statusColor[m.status]}>{m.status}</Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{m.issue}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900 text-sm">Recent Orders</h2>
            <Link to="/orders" className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 border-b border-slate-100">
                <th className="px-5 py-2.5 font-medium">Order ID</th>
                <th className="px-5 py-2.5 font-medium">Date</th>
                <th className="px-5 py-2.5 font-medium">Items</th>
                <th className="px-5 py-2.5 font-medium">Total</th>
                <th className="px-5 py-2.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.slice(0, 4).map((o) => (
                <tr key={o.id}>
                  <td className="px-5 py-3 font-medium text-slate-900">{o.id}</td>
                  <td className="px-5 py-3 text-slate-500">{o.date}</td>
                  <td className="px-5 py-3 text-slate-500">{o.items}</td>
                  <td className="px-5 py-3 text-slate-900">₹{o.total.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3">
                    <Badge color={statusColor[o.status]}>{o.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-brand-600" />
            <h2 className="font-semibold text-brand-900 text-sm">Coming Soon from Qelvira</h2>
          </div>
          <div className="space-y-3">
            {upcomingServices.map((s) => (
              <div key={s.id} className="flex items-center justify-between bg-white/60 rounded-lg px-3 py-2">
                <p className="text-sm text-brand-900">{s.service}</p>
                <span className="text-xs font-medium text-brand-600">{s.date}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-700 mt-3">
            Manpower services, AC maintenance contracts and more &mdash; managed the same way you order supplies today.
          </p>
        </div>
      </div>
    </Layout>
  )
}
