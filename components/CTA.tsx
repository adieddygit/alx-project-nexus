import Link from "next/link"

export function CTA() {
    return (
        <section className="py-24 bg-black text-white text-center">
            <h2 className="text-4xl font-bold">Ready to Elevate Your Shopping</h2>
            <p>Join thousands of happy customers today.</p>
            <Link href="/products"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
            Get Started
            </Link>
        </section>
    )
}