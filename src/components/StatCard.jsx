import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react"

const trendStyles = {
  up: "text-emerald-600 bg-emerald-50",
  down: "text-rose-600 bg-rose-50",
  flat: "text-slate-500 bg-slate-100",
}

const trendIcon = {
  up: ArrowUp,
  down: ArrowDown,
  flat: ArrowRight,
}

export default function StatCard({ label, value, delta, trend }) {
  const Icon = trendIcon[trend]
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {delta && (
          <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${trendStyles[trend]}`}>
            <Icon size={12} />
            {delta}
          </span>
        )}
      </div>
    </div>
  )
}
