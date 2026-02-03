import Link from "next/link"

export function CTA() {
    return (
        <section className="py-24 bg-black text-white text-center">
            <h2 className="text-4xl font-bold">Ready to Elevate Your Shopping</h2>
            <p>Join thousands of happy customers today.</p>

            <div className="p-10">
                <Link
                href="/auth/signup"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Get Started
              </Link>

              <Link
                href="/auth/login"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg"
              >
                Sign In
              </Link>
            </div>
            
        </section>
    )
}