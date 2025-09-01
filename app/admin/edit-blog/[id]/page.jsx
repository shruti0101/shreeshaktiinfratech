"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const r = await fetch(`/api/blog/${id}`);
      const d = await r.json();
      setBlog(d);
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const fd = new FormData(e.currentTarget);
    // Use multipart PUT so backend can optionally replace image
    const res = await fetch(`/api/blog/${id}`, { method: "PUT", body: fd });
    setSaving(false);

    if (res.ok) router.push("/admin");
    else alert("Failed to update");
  };

  if (!blog) return <p className="p-6">Loading…</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-2">Edit Blog</h1>
      <input name="title" defaultValue={blog.title} className="w-full border p-2" />
      <input name="permalink" defaultValue={blog.permalink} className="w-full border p-2" />
      <input name="metaTitle" defaultValue={blog.metaTitle} className="w-full border p-2" />
      <textarea name="metaDescription" defaultValue={blog.metaDescription} className="w-full border p-2" />
      <textarea name="content" defaultValue={blog.content} className="w-full border p-2 h-48" />
      {blog.image && <img src={blog.image} alt="" className="w-48 rounded" />}
      <input type="file" name="image" accept="image/*" className="w-full border p-2" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">{saving ? "Updating…" : "Update"}</button>
    </form>
  );
}
