import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import CalLoader from "@/components/CalLoader";
import { ThemeProvider } from "@/components/theme-provider";
import { site, absoluteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.defaultMetadata.title,
    template: site.defaultMetadata.titleTemplate,
  },
  description: site.defaultMetadata.description,
  keywords: [...site.defaultMetadata.keywords],
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.displayName,
    title: site.defaultMetadata.title,
    description: site.defaultMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultMetadata.title,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070d",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  alternateName: site.displayName,
  url: site.domain,
  logo: absoluteUrl(site.brandAssets.markSvg),
  email: site.emails.primary,
  foundingDate: String(site.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: "2805 Felding Court",
    addressLocality: "Mansfield",
    addressRegion: "TX",
    postalCode: "76063",
    addressCountry: "US",
  },
  sameAs: Object.values(site.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.emails.primary,
      contactType: "customer support",
    },
    {
      "@type": "ContactPoint",
      email: site.emails.sales,
      contactType: "sales",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.displayName,
  url: site.domain,
  description: site.defaultMetadata.description,
  publisher: { "@type": "Organization", name: site.name, url: site.domain },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.displayName,
  url: site.domain,
  description: site.description,
  email: site.emails.primary,
  areaServed: "Worldwide",
  serviceType: [
    "AI Engineering",
    "AI Agents",
    "Business Automation",
    "Enterprise Integrations",
    "Generative AI",
    "RAG Systems",
    "AI-Powered Marketing",
    "Custom AI Platforms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-noise min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              professionalServiceSchema,
            ]),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[rgb(var(--primary))] focus:text-white focus:text-sm"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CalLoader />
          <Header />
          <main id="main-content" className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
