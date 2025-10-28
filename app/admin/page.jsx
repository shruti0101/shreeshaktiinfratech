"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Adminpanel from "@/components/admin/Adminpanel";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((d) => {
        setBlogs(d);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this blog?")) return;
    const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) setBlogs((prev) => prev.filter((b) => b._id !== id));
    else alert("Failed to delete");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Adminpanel />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white flex items-center justify-end px-6 shadow">
          <h1 className="text-xl font-bold">Dashboard 📊</h1>
          <div>{/* Profile / Logout button later */}</div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className=" mb-6">
            <h2 className="text-4xl mb-10 font-semibold text-center ">Manage Blogs 🗂️</h2>
          
          </div>

          {loading ? (
            <p className="p-6 text-center text-gray-500 text-4xl">Loading...</p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-600">No blogs found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <div
                  key={b._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {b.image && (
                    <img
                      src={b.image}
                      alt={b.title}
                      className="h-40 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-lg line-clamp-1">
                      {b.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {b.metaDescription}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <Link
                        href={`/blogs/${b.permalink}`}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </Link>
                      <div className="space-x-2">
                        <Link
                          href={`/admin/edit-blog/${b._id}`}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(b._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
