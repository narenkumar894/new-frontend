import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home"

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header / Navbar */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🛍️ ShopHub
          </Link>

          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link
              to="/home"
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105"
            >
              Products
            </Link>
            <Link
              to="/addproduct"
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105"
            >
              Add Product
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105"
            >
              🛒 Cart
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-2 py-1 text-xs text-white shadow-lg">
                {cart.length}
              </span>
            </Link>

            {localStorage.getItem("user") ? (
              <button
                onClick={logout}
                className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 text-white hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        <Routes>
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">🛍️ ShopHub</h3>
            <p className="text-gray-300 mb-4">Your one-stop destination for amazing products</p>
            <p className="text-sm text-gray-400">
              © 2025 ShopHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
