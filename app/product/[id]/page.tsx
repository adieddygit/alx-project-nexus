import { Metadata } from "next";
import Image from "next/image";

async function getProduct(id: string) {
 const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
 })
 return res.json();
}

export async function generateMetadata({
 params,
}: {
  params: { id: string };
}): Promise<Metadata> {
    const product = await getProduct(params.id);

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: [product.image],
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: { is: string };
}) {
  const product = await getProduct(params.id);

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