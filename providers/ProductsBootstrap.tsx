"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";

export default function ProductsBootstrap() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return null;
}
