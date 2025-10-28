import { connect } from "@/Database/Db";
import Blog from "@/models/blog";
import imagekit from "@/utils/imageKit";

// GET /api/blog  -> list all blogs
export async function GET() {
  await connect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), { status: 200 });
}

// POST /api/blog  -> create blog with optional image upload (multipart/form-data)
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();
    const title = formData.get("title");
    const permalink = formData.get("permalink");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    let imageUrl = "";
    let imageFileId = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploaded = await imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: "blogs",
      });

      imageUrl = uploaded.url;
      imageFileId = uploaded.fileId;
    }

    const blog = await Blog.create({
      title,
      permalink,
      content,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imageFileId,
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error("POST /api/blog error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
