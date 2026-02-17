"use client";

// import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
            {/* Hero / Intro */}
            <section className="text-center">
                <h1 className="text-4xl md:text-5xl mb-4">
                 Ne<span className="text-5xl">╳</span>us<span className="text-indigo-600"></span><span className="text-indigo-500">Store</span>
                </h1>
                <p className="text-lg md:text-xl text-indigo-300 max-w-2xl mx-auto">
                NexusStore is a modern e-commerce PWA built for a seamless shopping experience.
                Our goal is to provide a fast, responsive, and user-friendly platform for everyone.
                </p>
            </section>

            {/* Mision / vision */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl mb-4">Our Mission</h2>
                    <p className=" text-indigo-300">
                    We aim to bring the best products to your fingertips while maintaining
                    high performance, accessibility, and a beautiful design.
                    </p>
                </div>
                <div>
                    {/* <Image
                    src="/image/"
                    alt="Our Mission"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover shadow-lg"
                    /> */}
                </div>
            </section>

            {/* Team / Values */}
            <section>
                <h2 className="text-3xl text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-black font-semibold text-xl mb-2">Quality</h3>
            <p className="text-indigo-600">
              Only the best products make it to our catalog.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-black font-semibold text-xl mb-2">Innovation</h3>
            <p className="text-indigo-600">
              We continuously improve our platform to enhance user experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-black font-semibold text-xl mb-2">Trust</h3>
            <p className="text-indigo-600">
              Building reliable relationships with our customers is our top priority.
            </p>
            </div>
        </div>
            </section>
        </main>
    )
}