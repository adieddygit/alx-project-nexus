import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ---------- TYPES ---------- */
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

/* ---------- OPTIMIZED FETCH ---------- */
async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: [`product-${id}`] // For on-demand revalidation
      },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const product = await res.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

/* ---------- METADATA ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  
  // Validate ID format
  if (!id || isNaN(Number(id))) {
    return {
      title: "Product Not Found | NexusStore",
      description: "The requested product could not be found.",
    };
  }

  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | NexusStore",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} | NexusStore`,
    description: product.description.length > 160 
      ? `${product.description.substring(0, 157)}...`
      : product.description,
    keywords: [product.category, product.title, "NexusStore"],
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.title,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

/* ---------- STATIC PARAMS GENERATION ---------- */
export async function generateStaticParams() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!res.ok) return [];

    const products: Product[] = await res.json();
    
    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch {
    return []; // Fallback to empty array if fetch fails
  }
}

/* ---------- PAGE ---------- */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Validate ID format before fetching
  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain w-full h-125 rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-200 leading-tight">
              {product.title}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-300 capitalize">
                {product.category}
              </span>
              <span className="text-sm text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-sm text-yellow-500">★</span>
                <span className="text-sm text-gray-400">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>

          <p className="text-indigo-300 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4">
            <p className="text-3xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex gap-4">
              <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 hover:text-black transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
