import Footer from "@/components/landingpage/Footer";
import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default async function BlogPage({ params }) {
  await connect();

  // Fetch current blog
  const blog = await Blog.findOne({ permalink: params.slug });
  if (!blog) return notFound();

  // Fetch related blogs
  let relatedBlogs = [];
  if (blog.category) {
    relatedBlogs = await Blog.find({
      category: blog.category,
      _id: { $ne: blog._id },
    })
      .limit(3)
      .select("title image permalink metaDescription createdAt");
  } else {
    relatedBlogs = await Blog.find({ _id: { $ne: blog._id } })
      .limit(3)
      .select("title image permalink metaDescription createdAt");
  }

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto p-6 mt-20 md:mt-30">
        {/* Blog Content */}
        <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
        <p className="text-gray-600 mb-6">{blog.metaDescription}</p>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-xl mb-6 shadow-md"
          />
        )}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            🌟 Featured Blogs
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedBlogs.map((related) => (
                <Link
                  key={related._id}
                  href={`/blogs/${related.permalink}`}
                  className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border bg-white"
                >
                  {related.image && (
                    <div className="overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                      {related.metaDescription}
                    </p>
                    <span className="mt-4 inline-block text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
