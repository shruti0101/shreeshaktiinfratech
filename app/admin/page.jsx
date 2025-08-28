"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = await res.json();
        setBlogs(data.blogs || []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <button
          className="bg-black text-white px-3 py-2 rounded"
          onClick={() => router.push("/admin/blogs/new")}
        >
          New Post
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : blogs.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="space-y-2">
          {blogs.map((b) => (
            <li key={b._id} className="border rounded p-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{b.title}</p>
                <p className="text-sm text-gray-600 line-clamp-1">{b.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="px-2 py-1 border rounded"
                  onClick={() => router.push(`/admin/blogs/${b._id}`)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

