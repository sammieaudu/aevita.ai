import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

const socialLinks = [
    { name: "X (Twitter)", href: site.social.twitter, icon: Twitter },
    { name: "GitHub", href: site.social.github, icon: Github },
    { name: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
    { name: "Instagram", href: site.social.instagram, icon: Instagram },
];

export function Footer() {
    return (
        <footer className="bg-[rgb(var(--background))] border-t border-[rgb(var(--border))]/30 pt-10 md:pt-14 pb-6">
            <div className="container px-3 md:px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-10">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-flex items-center mb-3 rounded-lg" aria-label={`${site.displayName} — home`}>
                            <Logo variant="full" theme="dark" width={30} />
                        </Link>
                        <p className="text-muted-foreground text-xs md:text-sm max-w-xs mb-4">
                            {site.name} designs and builds AI agents, autonomous workflows,
                            and enterprise integrations that turn disconnected operations
                            into intelligent, scalable systems.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors rounded"
                                >
                                    <social.icon className="w-4 h-4" aria-hidden="true" />
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            ))}
                            <a
                                href={site.social.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors rounded"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                                <span className="sr-only">TikTok</span>
                            </a>
                            <a
                                href={`mailto:${site.emails.primary}`}
                                className="text-muted-foreground hover:text-foreground transition-colors rounded"
                            >
                                <Mail className="w-4 h-4" aria-hidden="true" />
                                <span className="sr-only">Email {site.name}</span>
                            </a>
                        </div>
                    </div>

                    {Object.entries(site.footerNavigation).map(([group, links]) => (
                        <nav key={group} aria-label={`Footer — ${group}`}>
                            <h3 className="font-semibold text-sm mb-3">{group}</h3>
                            <ul className="space-y-1.5">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} {site.legalName} All rights reserved.
                    </p>
                    <div className="flex gap-4 md:gap-6">
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <a href={`mailto:${site.emails.support}`} className="hover:text-foreground transition-colors">
                            {site.emails.support}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
