import { useNavigate } from "react-router-dom"
import { Leaf } from "lucide-react"

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      <div className="hidden lg:flex flex-col justify-between bg-brand-700 text-white p-12">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
            <Leaf size={20} />
          </div>
          <span className="text-xl font-semibold">Qelvira</span>
        </div>

        <div className="space-y-4 max-w-md">
          <h2 className="text-3xl font-semibold leading-snug">
            Run your hotel's supplies &amp; maintenance from one place.
          </h2>
          <p className="text-brand-100 text-sm">
            Track inventory across every room, raise maintenance requests, and order toiletries,
            cleaning supplies and more directly from Qelvira &mdash; all in one portal.
          </p>
        </div>

        <p className="text-xs text-brand-200">&copy; 2026 Qelvira Technologies. All rights reserved.</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-9 w-9 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <Leaf size={20} />
            </div>
            <span className="text-xl font-semibold text-slate-900">Qelvira</span>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900">Hotel Portal Login</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to manage inventory, maintenance and orders.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Work email</label>
              <input
                type="email"
                defaultValue="rohan@thegrandmeridian.com"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs font-medium text-brand-600 hover:text-brand-700">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                defaultValue="••••••••••"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
              Keep me signed in
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            New hotel partner?{" "}
            <a href="#" className="font-medium text-brand-600 hover:text-brand-700">
              Request access
            </a>
          </p>

          <p className="mt-8 text-center text-xs text-slate-400">This is a dummy UI preview &mdash; no real authentication.</p>
        </div>
      </div>
    </div>
  )
}
