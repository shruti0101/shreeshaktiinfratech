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

        <section className="relative w-full h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center "
          style={{ backgroundImage: "url('/home/bg-footer.webp')" }}
        >
          <h1 className="text-white  text-3xl md:text-6xl font-bold">
            {blog.title}
          </h1>
       
        </div>
      </section>

      <div className="max-w-6xl mx-auto flex gap-15 my-20">
        {/* LEFT: Blog Content */}
        <main className="flex-1">
          <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
          <p className="text-gray-600 mb-6">{blog.metaDescription}</p>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-xl mb-6 shadow-md"
            />
          )}

          <p className="text-sm text-gray-500 mb-4">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          <div className="my-6 border-t border-gray-300" />

          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </main>

        {/* RIGHT: Featured Blogs Sidebar */}
        {relatedBlogs.length > 0 && (
          <aside className="w-full md:w-50 lg:w-85 shrink-0">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              🌟 Featured Blogs
            </h2>

            <div className="space-y-6">
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
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {related.metaDescription}
                    </p>
                    <span className="mt-3 inline-block text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>

      <Footer />
    </>
  );
}
