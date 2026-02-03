"use client"

import useEmblaCarousel from "embla-carousel-react";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const FeaturedCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true});
    const { items } = useAppSelector((s) => s.products);

    const featured = items
     .map((p, i) => ({ ...p, isFeatured: i < 6}))
     .filter((p) => p.isFeatured);

     useEffect(() => {
        emblaApi?.reInit();
     }, [emblaApi, featured.length]);

     return (
        <section className="py-20">
            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Products
            </h2>

            <div ref={emblaRef} className="overflow-hidden">
                <div>
                    {featured.map((product) => (
                        <div
                           key={product.id}
                           className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%]">
                            <ProductCard product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
};

export default FeaturedCarousel;