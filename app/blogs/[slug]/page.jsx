import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  await connect();
  const blog = await Blog.findOne({ permalink: params.slug });
  if (!blog) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.metaDescription}</p>
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full rounded mb-6" />}
      <article dangerouslySetInnerHTML={{ __html: blog.content }} />
    </main>
  );
}
