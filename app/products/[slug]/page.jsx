import { products } from "@/Data";
import ProductDetailClient from "./ProductDetailClient";

// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found - Shree Shakti Machines",
      description: "The product you are looking for does not exist.",
    };
  }

  // Handle product images safely
  const images =
    product.images && product.images.length > 0
      ? product.images.map((img) => ({
          url: typeof img === "string" ? img : img.src,
          alt: typeof img === "string" ? product.name : img.alt || product.name,
        }))
      : [
          {
            url:
              typeof product.image === "string"
                ? product.image
                : product.image?.src || "/default-image.jpg",
            alt:
              typeof product.image === "string"
                ? product.name
                : product.image?.alt || product.name,
          },
        ];

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
      images,
    },
  };
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return <p className="p-10">Product not found</p>;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 8);

  return (
    <ProductDetailClient product={product} relatedProducts={relatedProducts} />
  );
}
