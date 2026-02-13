"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center bg-linear-to-br from-black via-neutral-900 to-black text-white overflow-hidden py-14 px-16">

            {/* Glow */}
            <div className="inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_60%)]"/>

            <div className="relative max-w-7x1 mx-auto px-6 grid md:grid-cols2 gap-12 items-center" />

            {/* Text */}
            <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6}}
            >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Shop Smarter with{" "}
                    <span className="text-indigo-500">Ne╳usStore</span>
                </h1>

                <p className="mt-6 text-gray-300 text-lg max-w-xl">
                    Discover premium products, seamless checkout, and lightining-fast delivery - all in one place.
                </p>

                <div className="mt-8 flex gap-4">
                    <Link
                        href="/product"
                        className="inline-flex items-center justify-center
                                    px-6 py-3 rounded-xl
                                    bg-indigo-600 text-white font-medium
                                    hover:bg-indigo-500
                                    transition-all duration-300
                                    shadow-lg shadow-indigo-600/30
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                                    pointer-events-auto">
                            Explore Products
                        </Link>

                        <Link 
                        href="/about"
                        className="inline-flex items-center justify-center
                                    px-6 py-3 rounded-xl
                                    border border-white/20 text-white font-medium
                                    backdrop-blur-md
                                    hover:bg-white/10
                                    transition-all duration-300
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                        Learn More
                        </Link>
                </div>
            </motion.div>
            
            {/* Visual placeholder */}
            <motion.div
                initial={{ opacity: 0, scale:0.95}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay:0.2 }}
                className="hidden md:block"
                >
                <div className="w-full h-96 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"/>
            </motion.div>
        </section>
    );
}