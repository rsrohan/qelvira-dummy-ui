import { useMemo, useState } from "react"
import Layout from "../components/Layout"
import Badge, { statusColor } from "../components/Badge"
import { maintenanceRequests } from "../data/mockData"
import { Plus, X } from "lucide-react"

const statusTabs = ["All", "Open", "In Progress", "Resolved"]

function NewRequestModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">New Maintenance Request</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={18} />
          </button>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Room number</label>
            <input placeholder="e.g. #312" className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
            <select className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>AC & Cooling</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Furniture</option>
              <option>Electronics</option>
              <option>Cleaning</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Priority</label>
            <div className="flex gap-2">
              {["Low", "Medium", "High"].map((p) => (
                <label key={p} className="flex-1">
                  <input type="radio" name="priority" value={p} defaultChecked={p === "Medium"} className="peer sr-only" />
                  <div className="text-center rounded-lg border border-slate-300 py-2 text-sm text-slate-600 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 cursor-pointer">
                    {p}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
            <textarea rows={3} placeholder="Describe the issue..." className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" className="flex-1 rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function Maintenance() {
  const [statusFilter, setStatusFilter] = useState("All")
  const [showModal, setShowModal] = useState(false)

  const filtered = useMemo(
    () => maintenanceRequests.filter((m) => statusFilter === "All" || m.status === statusFilter),
    [statusFilter]
  )

  return (
    <Layout title="Maintenance" subtitle="Track and manage room & equipment maintenance">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1">
          {statusTabs.map((t) => (
            <button
              key={t}
              onClick={() => setStatusFilter(t)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                statusFilter === t ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          <Plus size={16} /> New Request
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b border-slate-100 bg-slate-50">
              <th className="px-5 py-3 font-medium">Request ID</th>
              <th className="px-5 py-3 font-medium">Room</th>
              <th className="px-5 py-3 font-medium">Issue</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Priority</th>
              <th className="px-5 py-3 font-medium">Assigned To</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((m) => (
              <tr key={m.id}>
                <td className="px-5 py-3 font-medium text-slate-900 whitespace-nowrap">{m.id}</td>
                <td className="px-5 py-3 text-slate-700 whitespace-nowrap">{m.room}</td>
                <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{m.issue}</td>
                <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{m.category}</td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <Badge color={statusColor[m.priority]}>{m.priority}</Badge>
                </td>
                <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{m.assignedTo}</td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <Badge color={statusColor[m.status]}>{m.status}</Badge>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-slate-400">
                  No requests in this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && <NewRequestModal onClose={() => setShowModal(false)} />}
    </Layout>
  )
}
