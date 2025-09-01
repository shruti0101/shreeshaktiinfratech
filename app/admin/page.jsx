"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((d) => { setBlogs(d); setLoading(false); });
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this blog?")) return;
    const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) setBlogs((prev) => prev.filter((b) => b._id !== id));
    else alert("Failed to delete");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 text-2xl font-bold border-b">Admin Panel</div>
        <nav className="p-4 space-y-3">
          <Link href="/admin" className="block text-gray-700 hover:text-blue-600">📄 Blogs</Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white flex items-center justify-between px-6 shadow">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div />
        </header>

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Manage Blogs</h2>
            <Link href="/admin/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ New Blog</Link>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <div key={b._id} className="bg-white shadow rounded-lg overflow-hidden">
                  {b.image && <img src={b.image} alt={b.title} className="h-40 w-full object-cover" />}
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{b.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{b.metaDescription}</p>
                    <div className="flex justify-between items-center mt-3">
                      <Link href={`/blogs/${b.permalink}`} className="text-blue-600 hover:underline">View</Link>
                      <div className="space-x-2">
                        <Link href={`/admin/edit-blog/${b._id}`} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</Link>
                        <button onClick={() => handleDelete(b._id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
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
