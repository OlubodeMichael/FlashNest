import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if JWT_SECRET is available
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET environment variable is not set");
    // Redirect to an error page or login page
    return NextResponse.redirect(
      new URL("/login?error=server_config", req.url)
    );
  }

  // Get token from cookie
  const token = req.cookies.get("jwt")?.value;

  // Redirect logged-in users away from login/signup
  if (publicRoutes.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // Check if the current path is protected
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If not a protected route, allow access
  if (!isProtected) return NextResponse.next();

  // For protected routes, require authentication
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      console.error("Token expired");
      const response = NextResponse.redirect(
        new URL("/login?error=expired", req.url)
      );
      response.cookies.delete("jwt");
      return response;
    }

    // Token is valid, allow access
    return NextResponse.next();
  } catch (err) {
    console.error("Auth error:", err.message);

    // Determine specific error type
    let errorType = "invalid";
    if (err.name === "JWTExpired") {
      errorType = "expired";
    } else if (err.name === "JWTInvalid") {
      errorType = "invalid";
    }

    const response = NextResponse.redirect(
      new URL(`/login?error=${errorType}`, req.url)
    );
    response.cookies.delete("jwt");
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
