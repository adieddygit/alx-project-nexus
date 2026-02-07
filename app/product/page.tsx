"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";
import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";

export default function ProductsPage() {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.products);

    // Fetch product once when loads
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);
    return (
        <main className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">All Products</h1>
            <FilterBar />
            <ProductGrid />
        </main>
    )
}