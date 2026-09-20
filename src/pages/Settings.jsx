import { useState } from "react"
import Layout from "../components/Layout"
import { hotel, currentUser } from "../data/mockData"

const tabs = ["Hotel Profile", "Team & Roles", "Notifications", "Billing Info"]

export default function Settings() {
  const [tab, setTab] = useState(tabs[0])

  return (
    <Layout title="Settings" subtitle="Manage your hotel profile and preferences">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`w-full text-left rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                tab === t ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6">
          {tab === "Hotel Profile" && (
            <div className="space-y-5 max-w-lg">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl font-semibold">
                  {hotel.logoInitials}
                </div>
                <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                  Change logo
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Hotel name</label>
                <input defaultValue={hotel.name} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Location</label>
                <input defaultValue={hotel.location} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Total rooms</label>
                <input defaultValue="80" className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <button className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                Save Changes
              </button>
            </div>
          )}

          {tab === "Team & Roles" && (
            <div className="space-y-3">
              {[
                { name: currentUser.name, role: currentUser.role, email: currentUser.email },
                { name: "Priya Nair", role: "Front Office Manager", email: "priya@thegrandmeridian.com" },
                { name: "Arjun Mehta", role: "Housekeeping Lead", email: "arjun@thegrandmeridian.com" },
              ].map((member) => (
                <div key={member.email} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{member.name}</p>
                    <p className="text-xs text-slate-500">{member.email}</p>
                  </div>
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-2.5 py-1">{member.role}</span>
                </div>
              ))}
              <button className="text-sm font-medium text-brand-600 hover:text-brand-700">+ Invite team member</button>
            </div>
          )}

          {tab === "Notifications" && (
            <div className="space-y-4 max-w-lg">
              {[
                "Low stock alerts",
                "New maintenance request created",
                "Order shipped / delivered",
                "Invoice due reminders",
              ].map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5.5 bg-slate-200 rounded-full peer peer-checked:bg-brand-600 transition-colors" />
                    <div className="absolute left-0.5 top-0.5 h-4.5 w-4.5 bg-white rounded-full transition-transform peer-checked:translate-x-4.5" />
                  </label>
                </div>
              ))}
            </div>
          )}

          {tab === "Billing Info" && (
            <div className="space-y-5 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Billing entity name</label>
                <input defaultValue="Grand Meridian Hospitality Pvt Ltd" className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">GSTIN</label>
                <input defaultValue="27AAAPZ1234C1Z5" className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Payment terms</label>
                <select className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
                  <option>Net 15</option>
                  <option>Net 30</option>
                  <option>Due on receipt</option>
                </select>
              </div>
              <button className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
