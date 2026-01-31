"use client"

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { ShoppingCart} from "lucide-react";

const Header = () => {
    const cartCount = useAppSelector(
        (state) => state.cart.items.length
    );

    return (
        <header className="sticky top-0 z-50 bg-white border">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-4xl font-bold text-black">
                Nexus<span className="text-indigo-600">Store</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-md font-bold text-black">
                    <Link href="/" className="hover:text-indigo-600">Home</Link>
                    <Link href="/" className="hover:text-indigo-600">Products</Link>
                    <Link href="/" className="hover:text-indigo-600">About</Link>
                </nav>

                {/* Cart */}
                <Link href="/" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-400"/>
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 flex items-center justify-center rounded-full">
                        {cartCount}
                    </span>
                )}
                </Link>
            </div>
        </header>
    );
};

export default Header;