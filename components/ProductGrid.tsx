"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductGrid = () => {
  const { items, status } = useAppSelector((state) => state.products);
  const { category, sortByPrice } = useAppSelector((state) => state.filters);

  const filteredProducts = useMemo(() => {
    let result = [...items];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (sortByPrice === "ascend") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortByPrice === "descend") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [items, category, sortByPrice]);

  if (status === "loading" && items.length === 0) {
    return (
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    );
  }

  return (
    <section
      aria-live="polite"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
