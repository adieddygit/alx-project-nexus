"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
    const cartCount = useAppSelector(
        (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
    }, [])

/* ---------------- SCROLL HANDLER ---------------- */
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const h = document.documentElement.scrollHeight - window.innerHeight;

            setScrolled(y > 80); // threshold after main section starts
            setProgress(h > 0 ? y / h : 0);
        };

        window.addEventListener("scroll", onScroll, { passive: true});
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    
/* ---------------- ROUTE THEME ---------------- */
    const forceDark = 
        pathname.startsWith("/product") ||
        pathname.startsWith("/cart");

    const isDark = forceDark || scrolled;

    /* ---------------- STYLES ---------------- */
    const headerClass = `
    sticky top-0 z-50 transition-all duration-300
    ease-out ${isDark ? "bg-black text-white shadow-lg" : "bg-white text-black shadow-none"}`;
    return (
<>
{/* PROGRESS BAR */}
<div className="fixed top-0 left-0 right-0 h-1 z-60">
    <div className="h-full bg-indigo-600 origin-left transition-transfrom duration-150" style={{ transform: mounted ? `scaleX(${progress})` : `scaleX(0)`,}}/>
</div>

<header className={headerClass}>
            <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-3 items-center">

                {/* Logo */}
                <Link href="/" className="text-4xl font-bold">
                Ne<span className="text-4xl">╳</span>us<span className="text-indigo-600">Store</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex justify-center">
                    <nav className={`hidden md:flex gap-8 text-md font-bold ${isDark ? "text-white" : "text-indigo-600"} `}>
                    <Link href="/" className="hover:text-indigo-200">Home</Link>
                    <Link href="/product" className="hover:text-indigo-200">Products</Link>
                    <Link href="/about" className="hover:text-indigo-200">About</Link>
                    </nav>

                    {/* Mobile Cart */}
                    <Link href="/cart" className="md:hidden relative">
                    <ShoppingCart className={`w-6 h-6 hover:text-indigo-600 mx-1 ${isDark ? "text-white" : "text-gray-500"} `}/>
                    {mounted && cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex item-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                    </Link>
                </div>
                

                {/* RIGHT: Cart (desktop) OR Hamburger (mobile) */}
                <div className="flex justify-end items-center gap-4">
                    {/* Desktop Cart */}
                    <Link href="/cart" className="hidden md:block relative">
                        <ShoppingCart className={`w-6 h-6 hover:text-indigo-600 ${isDark ? "text-white" : "text-gray-400"} `} />
                        {mounted && cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                        {cartCount}
                        </span>
                      )}
                    </Link>

                {/* Hamburger on Mobile */}
                <button 
                    onClick={()=> setOpen(!open)}
                    className={`md:hidden ${isDark ? "text-white" : "text-gray-600"} `}
                    aria-label="Toggle menu"
                    >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            </div>
            

            {/* Mobile Menu */}
            {open && (
                <nav className="md:hidden border-t bg-black text-white px-4 py-4 space-y-3 text-sm font-semibold">
                    <Link onClick={()=> setOpen(false)} href="/" className="block">
                        Home
                    </Link>
                    <Link onClick={()=> setOpen(false)} href="/product" className="block">
                        Products
                    </Link>
                    <Link onClick={()=> setOpen(false)} href="/about" className="block">
                        About
                    </Link>
                </nav>
            )}
        </header>
</>
        
    );
};

export default Header;