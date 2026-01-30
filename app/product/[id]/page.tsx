"use client";
import Image from "next/image";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/store/hooks"

export default function ProductDetails(){
    const { id } = useParams();
    const product = useAppSelector((state) => 
    state.products.items.find((p) => p.id === Number(id))
);

if (!product) return <p>Loading...</p>;

return (
    <main className="p-6 grid md:grid-cols-2 gap-8">
        <Image src={product.image} alt={product.title} />
        <section>
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <p className="text-lg font-bold">{product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>
        </section>
    </main>
);
}