"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product"

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <article className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
            <div className="relative w-full h-40 mb-3">
                <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link
            href={`/product/${product.id}`}
            className="mt-auto text-blue-600 text-sm font-medium hover:underline"
            >View Details</Link>
        </article>
    );
};

export default ProductCard;