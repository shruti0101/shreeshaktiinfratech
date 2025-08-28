import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminLogin = pathname.startsWith("/admin/login");
  const isBlogsApi = pathname.startsWith("/api/blogs");

  // Allow access to admin login page without token
  if (isAdminRoute && isAdminLogin) {
    return NextResponse.next();
  }

  // For admin pages (excluding login), require a valid token
  if (isAdminRoute && !isAdminLogin) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      const url = new URL("/admin/login", request.url);
      return NextResponse.redirect(url);
    }
    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (_e) {
      const url = new URL("/admin/login", request.url);
      return NextResponse.redirect(url);
    }
  }

  // For blogs API, require token for any non-GET method
  if (isBlogsApi && request.method !== "GET") {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (_e) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/blogs/:path*"],
};

