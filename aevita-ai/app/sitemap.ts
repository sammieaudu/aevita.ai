import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { jobs } from "@/lib/careers";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { path: "/", priority: 1, changeFrequency: "weekly" as const },
        { path: "/assessment", priority: 0.95, changeFrequency: "monthly" as const },
        { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/workflows", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/careers", priority: 0.8, changeFrequency: "weekly" as const },
        { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/solutions/startups", priority: 0.6, changeFrequency: "monthly" as const },
        { path: "/solutions/enterprise", priority: 0.6, changeFrequency: "monthly" as const },
        { path: "/portfolio", priority: 0.6, changeFrequency: "monthly" as const },
        { path: "/pricing", priority: 0.6, changeFrequency: "monthly" as const },
        { path: "/docs", priority: 0.4, changeFrequency: "monthly" as const },
        { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
        { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
        { path: "/responsible-ai", priority: 0.4, changeFrequency: "yearly" as const },
        { path: "/security", priority: 0.5, changeFrequency: "yearly" as const },
    ].map(({ path, priority, changeFrequency }) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency,
        priority,
    }));

    const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
        url: absoluteUrl(`/careers/${job.slug}`),
        lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: absoluteUrl(`/portfolio/${project.slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
    }));

    return [...staticRoutes, ...jobRoutes, ...projectRoutes];
}
