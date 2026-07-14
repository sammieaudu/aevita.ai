import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Building } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { jobs, getJob } from "@/lib/careers";
import { site, absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
    return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const job = getJob(slug);
    if (!job) {
        return { title: "Role not found" };
    }
    return {
        title: `${job.title} — Careers`,
        description: job.summary,
        alternates: {
            canonical: absoluteUrl(`/careers/${job.slug}`),
        },
    };
}

function JobList({ heading, items }: { heading: string; items: string[] }) {
    return (
        <div className="mb-8">
            <h2 className="font-heading text-lg font-semibold text-[rgb(var(--foreground))] mb-3">
                {heading}
            </h2>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[rgb(var(--foreground-muted))] leading-relaxed">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--primary))]" aria-hidden="true" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default async function JobPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const job = getJob(slug);
    if (!job) {
        notFound();
    }

    const jobPostingSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: `${job.summary}\n\n${job.aboutRole}`,
        datePosted: job.datePosted,
        employmentType: "FULL_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: site.name,
            legalName: site.legalName,
            sameAs: site.domain,
            logo: absoluteUrl(site.brandAssets.markSvg),
        },
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
            "@type": "Country",
            name: "Worldwide",
        },
        directApply: true,
        url: absoluteUrl(`/careers/${job.slug}`),
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />

            <Section className="pt-28 pb-8" glow>
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-1.5 text-sm text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        All open roles
                    </Link>
                    <h1 className="font-heading text-3xl md:text-5xl font-semibold text-[rgb(var(--foreground))] mb-4">
                        {job.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--foreground-muted))]">
                        <span className="inline-flex items-center gap-1.5">
                            <Building className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-[rgb(var(--primary))]" aria-hidden="true" />
                            {job.employmentType}
                        </span>
                    </div>
                </div>
            </Section>

            <Section grid className="pt-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card rounded-2xl p-6 md:p-8 mb-10">
                        <h2 className="font-heading text-lg font-semibold text-[rgb(var(--foreground))] mb-3">
                            About the role
                        </h2>
                        <p className="text-sm md:text-base text-[rgb(var(--foreground-muted))] leading-relaxed">
                            {job.aboutRole}
                        </p>
                    </div>

                    <JobList heading="What you'll do" items={job.responsibilities} />
                    <JobList heading="What we're looking for" items={job.requirements} />
                    <JobList heading="Nice to have" items={job.niceToHave} />
                </div>
            </Section>

            {/* Application form */}
            <Section id="apply">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                        <h2 className="font-heading text-2xl font-semibold text-[rgb(var(--foreground))] mb-2">
                            Apply for {job.title}
                        </h2>
                        <p className="text-sm text-[rgb(var(--foreground-muted))] mb-8">
                            We review every application and reply by email — usually within
                            one week.
                        </p>
                        <ApplicationForm defaultRole={job.slug} />
                    </div>
                </div>
            </Section>
        </div>
    );
}
