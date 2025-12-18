import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function Products({ setCart, cart }) {
  const [products, setproducts] = useState([]);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const res = await fetch(`${API}/api/deleteProduct/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Product deleted successfully");
      setproducts(products.filter((product) => product._id !== id));
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🛍️ Our Amazing Products
        </h2>
        <p className="text-gray-600 text-lg">Discover our curated collection of premium items</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 flex flex-col border border-gray-100 group"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={p.image}
                alt={p.name}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {p.rating} ⭐
              </div>
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {p.name}
            </h3>

            <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              ₹{p.price}
            </p>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-grow">
              {p.description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex gap-2">
                <Link
                  to={`/product/${p._id}`}
                  className="flex-1 px-4 py-2 text-sm rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 text-center font-medium"
                >
                  👁️ View Details
                </Link>

                <button
                  onClick={() => addToCart(p)}
                  className="flex-1 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium"
                >
                  🛍️ Add to Cart
                </button>
              </div>

              {/* Admin Action */}
              <button
                onClick={() => deleteProduct(p._id)}
                className="w-full px-4 py-2 text-sm rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium"
              >
                🗑️ Delete Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
