"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/componentProductGrid";
import InfiniteLoader from "@/components/InterLoader";


export default function HomePage() {
    const dispatch = useAppDispatch();
    const { page } = useAppSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts(page));
    }, [page]);

    return (
        <main>
        <FilterBar/>
        <ProductGrid/>
        <InfiniteLoader/>
        </main>
    )
}