import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value; // assuming JWT stored as 'token'

  // Skip middleware for static files, images, API routes, and favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // If visiting home page `/`
  if (pathname === "/") {
    // no token → redirect to login
    if (!token) {
      const loginUrl = req.nextUrl.clone();
      // loginUrl.pathname = "/auth/login";
      // return NextResponse.redirect(loginUrl);
    }
    // has token → redirect to dashboard
    else {
      const dashboardUrl = req.nextUrl.clone();
      dashboardUrl.pathname = "/dashboard";
      return NextResponse.redirect(dashboardUrl);
    }
  }

  // If visiting any protected route (e.g., dashboard) without token → redirect to login
  if (pathname.startsWith("/dashboard") && !token) {
    // const loginUrl = req.nextUrl.clone();
    // loginUrl.pathname = "/auth/login";
    // return NextResponse.redirect(loginUrl);
  }

  // Everything else → continue normally
  return NextResponse.next();
}

// Apply to all routes except static files
export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
