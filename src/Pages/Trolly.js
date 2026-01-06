 import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Trolly = () => {
  const shippingCost = 50;

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handcrafted Clay Pot",
      price: 250,
      image: "https://images.unsplash.com/photo-1590080875831-bcbf8d6f4bfc?auto=format&fit=crop&w=500&q=80",
      quantity: 1,
    },
    {
      id: 2,
      name: "Decorative Vase",
      price: 400,
      image: "https://images.unsplash.com/photo-1601049795399-8b36d7f9a9cc?auto=format&fit=crop&w=500&q=80",
      quantity: 2,
    },
  ]);

  const increaseQty = (id) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const removeItem = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Navbar />

      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-red-600 mb-6">
          THIS IS TROLLEY PAGE
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-600 text-lg">
            Your trolley is empty 🛍️
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-4 rounded-2xl shadow-md">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                      <p className="text-amber-700 font-medium">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={() => decreaseQty(item.id)} className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                      <Minus className="w-4 h-4 text-gray-700" />
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)} className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                      <Plus className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-gray-800">₹{item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Shipping</p>
                <p>₹{shippingCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-lg font-semibold text-amber-700">
                <p>Total</p>
                <p>₹{totalAmount + shippingCost}</p>
              </div>

              <button onClick={() => alert("Proceeding to checkout...")} className="mt-6 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Trolly;
