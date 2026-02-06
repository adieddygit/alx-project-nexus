"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";
import FilterBar from "@/components/FilterBar";
// import InfiniteLoader from "@/components/InfiniteLoader";
import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.products);

  // Fetch products once when component mounts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <HowItWorks />
      <CTA />
      <FilterBar />
      {/* <InfiniteLoader /> */}
    </main>
  );
}
