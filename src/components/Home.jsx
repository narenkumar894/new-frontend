import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl py-24 px-8 text-center shadow-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-pulse">
          🎆 Welcome to ShopHub 🎆
        </h1>
        <p className="text-xl mb-8 text-blue-100">
          Discover amazing deals on electronics, gadgets, accessories & more!
        </p>

        <Link
          to="/products"
          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          🛍️ Shop Now →
        </Link>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">Lightning-fast delivery within 2–4 days to your doorstep.</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-100">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Quality</h3>
            <p className="text-gray-600">Handpicked, top-rated items from verified sellers worldwide.</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Secure Payment</h3>
            <p className="text-gray-600">Bank-level security with 256-bit SSL encryption protection.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
