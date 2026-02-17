"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/store/cartSlice";
import Link from "next/link"

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // prevent SSR mismatch
  }

  if (items.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty 🛒</h1>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="px-3 py-1 border rounded"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="px-3 py-1 border rounded"
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-600 hover:underline"
        >
          Clear Cart
        </button>

        <div className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </div>
        <Link
         href="/checkout"
         className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
>
         Proceed to Checkout
        </Link>
         </div>
    </section>
  );
}
