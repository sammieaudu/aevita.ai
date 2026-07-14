import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: site.displayName,
        short_name: site.name,
        description: site.description,
        start_url: "/",
        display: "standalone",
        background_color: "#05070D",
        theme_color: "#05070D",
        icons: [
            {
                src: "/icon",
                sizes: "64x64",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
