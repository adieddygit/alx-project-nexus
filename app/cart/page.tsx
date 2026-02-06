"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/store/cartSlice";
import Image from "next/image"

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) return <p className="text-center mt-20">Your cart is empty.</p>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image src="" alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
              <button
                className="ml-4 text-red-500 font-bold"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
}
