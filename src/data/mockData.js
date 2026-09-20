export const hotel = {
  name: "The Grand Meridian",
  location: "Bandra West, Mumbai",
  plan: "Qelvira Pro",
  logoInitials: "GM",
}

export const currentUser = {
  name: "Rohan Verma",
  role: "Operations Manager",
  email: "rohan@thegrandmeridian.com",
}

export const kpis = [
  { label: "Rooms Occupied", value: "64 / 80", delta: "+4%", trend: "up" },
  { label: "Low Stock Items", value: "7", delta: "+2", trend: "down" },
  { label: "Open Maintenance", value: "5", delta: "-3", trend: "up" },
  { label: "Pending Orders", value: "3", delta: "0", trend: "flat" },
]

export const stockAlerts = [
  { id: 1, item: "Bath Towels (White, L)", category: "Linen", stock: 12, reorderAt: 40, unit: "pcs" },
  { id: 2, item: "Shampoo Sachets 30ml", category: "Toiletries", stock: 85, reorderAt: 200, unit: "pcs" },
  { id: 3, item: "Floor Disinfectant 5L", category: "Cleaning", stock: 3, reorderAt: 10, unit: "cans" },
  { id: 4, item: "Toilet Paper Rolls", category: "Toiletries", stock: 60, reorderAt: 150, unit: "rolls" },
  { id: 5, item: "Hand Soap Dispenser Refill", category: "Toiletries", stock: 18, reorderAt: 50, unit: "bottles" },
]

export const floors = [
  { id: "f1", name: "Ground Floor", rooms: 20 },
  { id: "f2", name: "1st Floor", rooms: 20 },
  { id: "f3", name: "2nd Floor", rooms: 20 },
  { id: "f4", name: "3rd Floor (Suites)", rooms: 20 },
]

const roomTypes = ["Deluxe", "Deluxe", "Executive", "Suite"]
const statuses = ["occupied", "vacant", "cleaning", "maintenance"]

export const rooms = Array.from({ length: 80 }).map((_, i) => {
  const floorIdx = Math.floor(i / 20)
  const num = 101 + floorIdx * 100 + (i % 20)
  const statusPick = statuses[(i * 7) % statuses.length]
  return {
    id: num,
    number: `#${num}`,
    floor: floors[floorIdx].name,
    type: roomTypes[floorIdx],
    status: i % 11 === 0 ? "maintenance" : statusPick,
    lastCleaned: "2026-09-19",
    suppliesOk: i % 9 !== 0,
  }
})

export const inventoryCategories = ["All", "Toiletries", "Cleaning", "Linen", "Amenities", "Maintenance Parts"]

export const inventoryItems = [
  { id: 1, name: "Shampoo Sachets 30ml", category: "Toiletries", sku: "QLV-TL-001", stock: 85, reorderAt: 200, unit: "pcs", price: 6 },
  { id: 2, name: "Conditioner Sachets 30ml", category: "Toiletries", sku: "QLV-TL-002", stock: 210, reorderAt: 200, unit: "pcs", price: 6 },
  { id: 3, name: "Bath Soap Bar 40g", category: "Toiletries", sku: "QLV-TL-003", stock: 340, reorderAt: 150, unit: "pcs", price: 8 },
  { id: 4, name: "Toilet Paper Rolls", category: "Toiletries", sku: "QLV-TL-004", stock: 60, reorderAt: 150, unit: "rolls", price: 22 },
  { id: 5, name: "Hand Soap Dispenser Refill", category: "Toiletries", sku: "QLV-TL-005", stock: 18, reorderAt: 50, unit: "bottles", price: 95 },
  { id: 6, name: "Floor Disinfectant 5L", category: "Cleaning", sku: "QLV-CL-010", stock: 3, reorderAt: 10, unit: "cans", price: 480 },
  { id: 7, name: "Glass Cleaner 1L", category: "Cleaning", sku: "QLV-CL-011", stock: 45, reorderAt: 20, unit: "bottles", price: 120 },
  { id: 8, name: "Microfiber Cleaning Cloth", category: "Cleaning", sku: "QLV-CL-012", stock: 150, reorderAt: 60, unit: "pcs", price: 35 },
  { id: 9, name: "Mop Head Refill", category: "Cleaning", sku: "QLV-CL-013", stock: 22, reorderAt: 25, unit: "pcs", price: 150 },
  { id: 10, name: "Bath Towels (White, L)", category: "Linen", sku: "QLV-LN-020", stock: 12, reorderAt: 40, unit: "pcs", price: 320 },
  { id: 11, name: "Bedsheet Set (Queen)", category: "Linen", sku: "QLV-LN-021", stock: 65, reorderAt: 30, unit: "sets", price: 1450 },
  { id: 12, name: "Pillow Covers", category: "Linen", sku: "QLV-LN-022", stock: 140, reorderAt: 50, unit: "pcs", price: 180 },
  { id: 13, name: "Welcome Kit (Slippers + Cap)", category: "Amenities", sku: "QLV-AM-030", stock: 90, reorderAt: 40, unit: "kits", price: 65 },
  { id: 14, name: "Mini Bar Snack Pack", category: "Amenities", sku: "QLV-AM-031", stock: 130, reorderAt: 50, unit: "packs", price: 150 },
  { id: 15, name: "AC Filter (Standard)", category: "Maintenance Parts", sku: "QLV-MP-040", stock: 8, reorderAt: 15, unit: "pcs", price: 650 },
  { id: 16, name: "LED Bulb 9W", category: "Maintenance Parts", sku: "QLV-MP-041", stock: 55, reorderAt: 30, unit: "pcs", price: 90 },
]

export const maintenanceRequests = [
  { id: "MR-2041", room: "#312", issue: "AC not cooling", category: "AC & Cooling", priority: "High", status: "In Progress", assignedTo: "Suresh (AC Tech)", createdAt: "2026-09-19", eta: "2026-09-20" },
  { id: "MR-2040", room: "#118", issue: "Leaking bathroom tap", category: "Plumbing", priority: "Medium", status: "Open", assignedTo: "Unassigned", createdAt: "2026-09-19", eta: "-" },
  { id: "MR-2039", room: "#207", issue: "TV remote not working", category: "Electronics", priority: "Low", status: "Open", assignedTo: "Unassigned", createdAt: "2026-09-18", eta: "-" },
  { id: "MR-2038", room: "#405", issue: "Wardrobe door hinge broken", category: "Furniture", priority: "Low", status: "Resolved", assignedTo: "Ramesh (Carpenter)", createdAt: "2026-09-16", eta: "2026-09-17" },
  { id: "MR-2037", room: "#221", issue: "Room key card reader faulty", category: "Electrical", priority: "High", status: "In Progress", assignedTo: "Vikram (Electrician)", createdAt: "2026-09-17", eta: "2026-09-20" },
  { id: "MR-2036", room: "#150", issue: "Musty smell from carpet", category: "Cleaning", priority: "Medium", status: "Resolved", assignedTo: "Housekeeping", createdAt: "2026-09-14", eta: "2026-09-15" },
]

export const productCategories = ["All", "Toiletries", "Cleaning", "Linen", "Amenities", "Maintenance Parts"]

export const products = inventoryItems.map((item) => ({
  ...item,
  description: `Premium ${item.category.toLowerCase()} supplies, bulk packaged for hospitality use.`,
  moq: item.unit === "pcs" ? 50 : 10,
  rating: (4 + (item.id % 10) / 10).toFixed(1),
}))

export const orders = [
  { id: "QO-10231", date: "2026-09-18", items: 4, total: 18650, status: "Delivered", eta: "-" },
  { id: "QO-10230", date: "2026-09-15", items: 2, total: 4200, status: "Shipped", eta: "2026-09-21" },
  { id: "QO-10229", date: "2026-09-12", items: 6, total: 32100, status: "Delivered", eta: "-" },
  { id: "QO-10228", date: "2026-09-08", items: 3, total: 9800, status: "Delivered", eta: "-" },
  { id: "QO-10227", date: "2026-09-20", items: 5, total: 21400, status: "Processing", eta: "2026-09-24" },
]

export const invoices = [
  { id: "INV-8891", order: "QO-10231", date: "2026-09-18", amount: 18650, status: "Paid" },
  { id: "INV-8890", order: "QO-10230", date: "2026-09-15", amount: 4200, status: "Paid" },
  { id: "INV-8889", order: "QO-10229", date: "2026-09-12", amount: 32100, status: "Paid" },
  { id: "INV-8888", order: "QO-10228", date: "2026-09-08", amount: 9800, status: "Overdue" },
  { id: "INV-8887", order: "QO-10227", date: "2026-09-20", amount: 21400, status: "Pending" },
]

export const upcomingServices = [
  { id: 1, service: "AC Servicing (Central Unit)", type: "Coming Soon", date: "Q4 2026" },
  { id: 2, service: "Housekeeping Manpower Staffing", type: "Coming Soon", date: "Q4 2026" },
  { id: 3, service: "Electrical Maintenance Contract", type: "Coming Soon", date: "Q1 2027" },
]
