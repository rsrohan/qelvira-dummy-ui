const styles = {
  slate: "bg-slate-100 text-slate-700",
  green: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  red: "bg-rose-100 text-rose-700",
  blue: "bg-blue-100 text-blue-700",
  brand: "bg-brand-100 text-brand-700",
}

export default function Badge({ color = "slate", children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[color]}`}>
      {children}
    </span>
  )
}

export const statusColor = {
  occupied: "blue",
  vacant: "green",
  cleaning: "amber",
  maintenance: "red",
  Open: "amber",
  "In Progress": "blue",
  Resolved: "green",
  Delivered: "green",
  Shipped: "blue",
  Processing: "amber",
  Paid: "green",
  Pending: "amber",
  Overdue: "red",
  High: "red",
  Medium: "amber",
  Low: "slate",
}
