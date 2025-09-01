"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlog() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);

    const res = await fetch("/api/blog", { method: "POST", body: fd });
    setLoading(false);

    if (res.ok) router.push("/admin");
    else alert("Failed to save");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-2">Create Blog</h1>
      <input name="title" placeholder="Title" required className="w-full border p-2" />
      <input name="permalink" placeholder="Permalink (unique)" required className="w-full border p-2" />
      <input name="metaTitle" placeholder="Meta Title" className="w-full border p-2" />
      <textarea name="metaDescription" placeholder="Meta Description" className="w-full border p-2" />
      <textarea name="content" placeholder="Content (HTML allowed)" required className="w-full border p-2 h-48" />
      <input type="file" name="image" accept="image/*" className="w-full border p-2" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">{loading ? "Saving..." : "Save"}</button>
    </form>
  );
}
