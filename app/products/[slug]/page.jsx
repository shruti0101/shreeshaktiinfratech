import { products } from "@/Data";
import ProductDetailClient from "./ProductDetailClient";

// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found - Shree Shakti Machines",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
      images: product.images?.length
        ? product.images.map((img) => ({ url: img.src, alt: img.alt }))
        : [{ url: product.image.src, alt: product.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.description,
      images: product.images?.length
        ? product.images.map((img) => ({ url: img.src, alt: img.alt }))
        : [{ url: product.image.src, alt: product.image.alt }],
    },
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <p className="p-10">Product not found</p>;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 8); // limit to 8 (adjust as needed)
  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
