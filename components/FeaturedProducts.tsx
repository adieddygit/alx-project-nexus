import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";


export function FeaturedProducts() {
    const { items, status } = useAppSelector((state) => state.products);

    const featured = useMemo(() => {
        return items.slice(0, 4);
    }, [items]);

    return (
        <section className="py-24 bg-indigo-800">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-100">
                    Featured Products
                </h2>
                <p className="text-gray-300 mt-2">
                    Hand-picked items you&apos;ll love
                </p>
                </div>
                
                {/* Products */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {status === "loading" && featured.length === 0 ? Array.from({ length: 4}).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))
                    : featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}