import { NextResponse } from "next/server";
import { connect } from "@/Database/Db";
import User from "@/models/user";
import { hashPassword, signToken } from "@/utils/auth";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connect();

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ username, email, password: hashedPassword });

    const token = signToken({ userId: user._id.toString() });
    const response = NextResponse.json(
      {
        user: { id: user._id.toString(), username: user.username, email: user.email },
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

