"use client";

import { useAppSelector } from "@/store/hooks";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductGrid = () => {
    const { items, status } = useAppSelector((state) => state.products);

    if (status === "loading" && items.length === 0) {
        return (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8}).map((_, i) => (
                    <SkeletonCard key={i}/>
                ))}
            </section>
        );
    }

    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductGrid;