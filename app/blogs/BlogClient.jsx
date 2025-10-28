"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Image from "next/image";





export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blog", { cache: "no-store" });
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
   <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">

 

        <div
          className="absolute inset-0 md:bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/home/hero4.webp')" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white z-10">Blogs</h2>
        </div>
      </section>
      <div className="max-w-6xl mx-auto p-6 md:mt-10">
        <h2 className="text-4xl font-bold mb-12 text-center">🔍 Explore Our Blogs</h2>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-gray-600 text-center">No blogs found</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.permalink}`}
                className="group border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
              >
                {/* Blog Image */}
                {blog.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      unoptimized
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg md:text-2xl font-semibold mb-2 group-hover:text-blue-600 line-clamp-2">
                    {blog.title}
                  </h2>
               

          
                  <span className="text-blue-600 font-medium group-hover:underline mt-auto">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
