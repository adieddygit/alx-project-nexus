"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { incrementPage, fetchProducts } from "@/store/productsSlice";

const InfiniteLoader = () => {
  const dispatch = useAppDispatch();
  const { status, page, hasMore } = useAppSelector((state) => state.products);
  const ref = useRef<HTMLDivElement | null>(null);

  // Observe the div
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && status !== "loading" && hasMore) {
        dispatch(incrementPage());
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [dispatch, status, hasMore]);

  // Fetch products when page changes
  useEffect(() => {
    if (hasMore) {
      dispatch(fetchProducts());
    }
  }, [dispatch, page, hasMore]);

  return <div ref={ref} className="h-10" aria-label="Load more products" />;
};

export default InfiniteLoader;
