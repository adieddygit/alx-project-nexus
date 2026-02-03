import type { Metadata } from "next";
import Image from "next/image";

/* ---------- METADATA FETCH ---------- */
async function getProductForMetadata(id: string) {
  try {
 const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 } 
 });

 if(!res.ok) return null;

 return res.json();
}catch {
  return null;
}
}

/* ---------- PAGE FETCH ---------- */
async function getProduct(id: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}
/* ---------- METADATA ---------- */
export async function generateMetadata({
 params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const product = await getProductForMetadata(id);

    if (!product) {
      return {
        title: "Product | NexusStore",
        description: "Browse our products on NexusStore",
      };
    }

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

/* ---------- PAGE ---------- */
export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-6 text-2xl font-bold text-indigo-600">{product.price}</p>
          </div>
    </section>
  )
}