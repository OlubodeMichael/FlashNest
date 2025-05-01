import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  /*
  const { pathname } = req.nextUrl;

  if (!process.env.JWT_SECRET) {
    return NextResponse.redirect(
      new URL("/login?error=server_config", req.url)
    );
  }
  console.log("Cookie Header:", req.headers.get("cookie"));
  const token = req.cookies.get("jwt")?.value;

  // Redirect logged-in users away from login/signup
  if (["/login", "/signup"].includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // For protected routes, require authentication
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    let errorType = "invalid";
    if (err.name === "JWTExpired") {
      errorType = "expired";
    }
    const response = NextResponse.redirect(
      new URL(`/login?error=${errorType}`, req.url)
    );
    response.cookies.set("jwt", "", { maxAge: 0, path: "/" });
    return response;
  }
  */
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
