"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

export default function CheckoutPage() {
  const { items } = useAppSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">No items to checkout</h1>
        <Link href="/products" className="text-indigo-600 underline">
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="mt-10 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-500"
      >
        Place Order
      </button>
    </section>
  );
}
