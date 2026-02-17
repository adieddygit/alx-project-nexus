"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/productsSlice";
import InfiniteLoader from "@/components/InfiniteLoader";
import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
// import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.products);

  // Fetch products once when component mounts
  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch, page]);

  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <HowItWorks />
      <CTA />
      <InfiniteLoader />
    </main>
  );
}
