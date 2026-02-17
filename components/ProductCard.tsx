"use client";

import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

type Props = {
    product: Product;
}

const ProductCard = ({ product }:Props) => {

    const dispatch = useAppDispatch();

    return (
        <motion.article 
        whileHover={{y: -6}}
        transition={{ type: "spring", stiffness: 300}}
        tabIndex={0}
        className="relative bg-white text-gray-500 rounded-xl shadow-sm hover:shadow p-4 flex flex-col overflow-hidden">
            
            {/* Featured Badge */}
            {product.isFeatured && (
                <span className="absolute top-3 left-3 z-10 bg-black text-white taxt-xs px-2 py-1 rounded-full">
                🔥 Featured
                </span>
            )}
            <Link
            href={`/product/${product.id}`}
            className="mt-auto text-blue-600 text-sm font-medium hover:underline">
            <div className="relative w-full h-48 mb-3">
                <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                />
            </div>

            <div className="p-4">
              <h3 className="text-gray-900">{product.title}</h3>
              <p className="text-red-500 font-semibold">${product.price}</p>
            </div>
            </Link>

            <button
            onClick={() =>
                dispatch(
                    addToCart({
                     id: product.id,
                     title: product.title,
                     price: product.price,
                     image: product.image,
                     quantity: 1,
                    })
                )
            } className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg">
                Add to Cart
            </button>
        </motion.article>
    );
};

export default ProductCard;