"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Adminpanel from "@/components/admin/Adminpanel";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor to avoid SSR issues in Next.js
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function NewBlog() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState(""); // 👈 state for editor content
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);

    // append editor content manually (since it's not tied to <input>)
    fd.append("content", content);

    const res = await fetch("/api/blog", { method: "POST", body: fd });
    setLoading(false);

    if (res.ok) router.push("/admin");
    else alert("Failed to save");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Adminpanel />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white flex items-center justify-between px-6 shadow">
          <h1 className="text-2xl font-bold">Create Blog ✍️</h1>
        </header>

        {/* Form Section */}
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
                placeholder="Enter blog title"
                required
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

           

            {/* Permalink */}
            <div>
              <label className="block font-semibold mb-1">Permalink</label>
              <input
                name="permalink"
                placeholder="unique-url-slug"
                required
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Meta Title */}
            <div>
              <label className="block font-semibold mb-1">Meta Title</label>
              <input
                name="metaTitle"
                placeholder="SEO Meta Title"
                className="w-full border rounded p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Meta Description */}
            <div>
              <label className="block font-semibold mb-1">Meta Description</label>
              <textarea
                name="metaDescription"
                placeholder="Short SEO-friendly description"
                className="w-full border rounded p-2 h-20 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Content with JoditEditor */}
            <div>
              <label className="block font-semibold mb-1">Content</label>
              <div className="border rounded">
                <JoditEditor
                  value={content}
                  tabIndex={1}
                  onChange={(newContent) => setContent(newContent)}
                />
              </div>
            </div>

            {/* Image Upload + Preview */}
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
                  <p className="text-sm text-gray-600 mb-1">Preview:</p>
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
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Uploading… ⏳" : "Upload 🚀"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
