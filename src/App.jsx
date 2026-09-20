import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Inventory from "./pages/Inventory"
import Maintenance from "./pages/Maintenance"
import Marketplace from "./pages/Marketplace"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Settings from "./pages/Settings"

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/qelvira-dummy-ui">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
