"use client";

import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/store/cartSlice";
import Image from "next/image";
import { X } from "lucide-react"; // close icon

export default function CartDrawer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const [isOpen, setIsOpen] = useState(false);

  // Open drawer when items > 0 (optional, or trigger via header)
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (cartCount > 0) {
      // setIsOpen(true); // optional auto-open
    }
  }, [cartCount]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl text-gray-500 font-bold">Cart Panel</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-indigo-300 p-2 rounded-lg"
              >
                <Image src={item.image} alt={item.title} width={80} height={80} className="object-contain" />
                <div className="flex-1 px-2">
                  <h3 className="text-indigo-500">{item.title}</h3>
                  <p className="text-sm text-red-500">${item.price}</p>
                  <div className="flex gap-2 mt-1">
                    <button
                      className="px-2 py-1 bg-black rounded"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="text-indigo-600">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-black rounded"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-2 text-red-500 font-bold"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            <button
              className="mt-3 w-full py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500 transition"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {/* Optional button to open drawer */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center z-50 hover:bg-indigo-500 transition"
      >
        🛒
      </button>
    </>
  );
}
