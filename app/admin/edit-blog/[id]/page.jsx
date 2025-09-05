"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Adminpanel from "@/components/admin/Adminpanel";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    (async () => {
      const r = await fetch(`/api/blog/${id}`);
      const d = await r.json();
      setBlog(d);
      setPreview(d.image || null);
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const fd = new FormData(e.currentTarget);
    const res = await fetch(`/api/blog/${id}`, { method: "PUT", body: fd });
    setSaving(false);

    if (res.ok) router.push("/admin");
    else alert("Failed to update");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  if (!blog) return <p className="p-6  text-center text-gray-500 text-4xl">Loading…</p>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Adminpanel />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white flex items-center justify-between px-6 shadow">
          <h1 className="text-2xl font-bold">Edit Blog ✍️</h1>
        </header>

        {/* Form */}
        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
          >
            {/* Title */}
            <div>
              <label className="block font-semibold mb-1">Title</label>
              <input
                name="title"
                defaultValue={blog.title}
                required
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Permalink */}
            <div>
              <label className="block font-semibold mb-1">Permalink</label>
              <input
                name="permalink"
                defaultValue={blog.permalink}
                required
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Meta Title */}
            <div>
              <label className="block font-semibold mb-1">Meta Title</label>
              <input
                name="metaTitle"
                defaultValue={blog.metaTitle}
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Meta Description */}
            <div>
              <label className="block font-semibold mb-1">Meta Description</label>
              <textarea
                name="metaDescription"
                defaultValue={blog.metaDescription}
                className="w-full border rounded p-2 h-20 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block font-semibold mb-1">Content</label>
              <textarea
                name="content"
                defaultValue={blog.content}
                required
                className="w-full border rounded p-2 h-48 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Image Upload with Preview */}
            <div>
              <label className="block font-semibold mb-2">Thumbnail</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded p-2"
              />
              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-56 h-36 object-cover rounded shadow-md border"
                  />
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
              >
                {saving ? "Updating… ⏳" : "Update ✅"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
