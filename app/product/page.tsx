"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";
import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";
import InfiniteLoader from "@/components/InfiniteLoader";

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { status, page, hasMore } = useAppSelector((state) => state.products);

  // Fetch products when page changes (initial fetch happens at page 1)
  useEffect(() => {
    if (hasMore && status !== "loading") {
      dispatch(fetchProducts());
    }
  }, [dispatch, page, hasMore, status]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <FilterBar />

      <ProductGrid />

      {/* Loader */}
      {status === "loading" && (
        <p className="text-center text-gray-500 mt-4">Loading...</p>
      )}

      {/* No more products message */}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-4">
          No more products to load
        </p>
      )}

      {/* Infinite Scroll Trigger */}
      <InfiniteLoader />
    </main>
  );
}
