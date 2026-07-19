import type { MetadataRoute } from "next";
import { site, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/admin"],
            },
        ],
        sitemap: absoluteUrl("/sitemap.xml"),
        host: site.domain,
    };
}
