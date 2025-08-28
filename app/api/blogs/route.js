import { NextResponse } from "next/server";
import { connect } from "@/Database/Db";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await connect();
    const blogs = await Blog.find({}).sort({ date: -1 });
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, image } = body;
    if (!title || !description || !image) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await connect();
    const blog = await Blog.create({ title, description, image });
    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

