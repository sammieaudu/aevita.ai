
import { Section } from "@/components/ui/section";
import { site, absoluteUrl } from "@/lib/site";

export const metadata = {
    title: "Terms of Service",
    alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsAndConditions() {
    return (
        <div className="pt-24 pb-16">
            <Section>
                <div className="max-w-3xl mx-auto prose dark:prose-invert">
                    <h1>Terms and Conditions</h1>
                    <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and {site.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), concerning your access to and use of the {site.displayName} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                    </p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
                    </p>

                    <h2>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                    </p>

                    <h2>4. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:{" "}
                        <a href={`mailto:${site.emails.support}`}>{site.emails.support}</a>
                    </p>
                </div>
            </Section>
        </div>
    );
}
