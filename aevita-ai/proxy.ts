import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HTTP Basic Auth gate for the /admin area. Credentials come from the
 * ADMIN_USER / ADMIN_PASSWORD environment variables; if they are not set,
 * the admin area is unavailable rather than open.
 */
export function proxy(request: NextRequest) {
    const user = process.env.ADMIN_USER;
    const password = process.env.ADMIN_PASSWORD;

    if (!user || !password) {
        return new NextResponse("Admin access is not configured", { status: 503 });
    }

    const header = request.headers.get("authorization");
    if (header?.startsWith("Basic ")) {
        try {
            const [givenUser, ...rest] = atob(header.slice(6)).split(":");
            const givenPassword = rest.join(":");
            if (givenUser === user && givenPassword === password) {
                return NextResponse.next();
            }
        } catch {
            // fall through to the 401 challenge
        }
    }

    return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Aevita Admin", charset="UTF-8"' },
    });
}

export const config = {
    matcher: ["/admin/:path*"],
};
