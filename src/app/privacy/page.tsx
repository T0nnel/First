import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - ToolHub',
    description: 'Learn how ToolHub collects, uses, and protects your information.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-5xl font-black mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 text-sm">Last updated: March 15, 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-10 text-gray-800 dark:text-gray-200">

                <section>
                    <h2 className="text-3xl font-bold mb-4">1. Overview</h2>
                    <p className="leading-relaxed">
                        ToolHub (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website toolhub.app (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed mb-4">
                        When you visit ToolHub, we may automatically collect certain information about your device, including your browser type, operating system, referring URLs, IP address, and pages visited. This is done through standard server logs and analytics tools.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
                    <p className="leading-relaxed">
                        Most tools on ToolHub process all data locally in your browser — your files and text inputs are <strong>never uploaded to our servers</strong>. If you contact us via the contact page or advertise inquiry form, we collect the information you voluntarily submit (name, email, message).
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">3. Cookies</h2>
                    <p className="leading-relaxed mb-4">
                        We use cookies and similar tracking technologies in the following ways:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Theme preference:</strong> A cookie stores your light/dark mode preference.</li>
                        <li><strong>Analytics (Google Analytics):</strong> We use Google Analytics to understand how visitors interact with our site. Google Analytics sets cookies to track sessions. You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
                        <li><strong>Advertising (Google AdSense):</strong> We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">4. Google AdSense & Third-Party Advertising</h2>
                    <p className="leading-relaxed">
                        We use Google AdSense, a third-party advertising service provided by Google LLC. Google AdSense uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to our site and/or other sites on the Internet. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
                    </p>
                    <p className="leading-relaxed mt-4">
                        For more information about how Google uses data, see <a href="https://policies.google.com/technologies/partner-sites" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners&apos; sites or apps</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">5. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To operate and maintain our website</li>
                        <li>To analyze usage patterns and improve our tools</li>
                        <li>To respond to your inquiries and support requests</li>
                        <li>To display relevant advertisements via Google AdSense</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">6. Data Sharing & Disclosure</h2>
                    <p className="leading-relaxed">
                        We do not sell, trade, or rent your personal information to third parties. We may share information with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li><strong>Google Analytics</strong> — for website traffic analysis</li>
                        <li><strong>Google AdSense</strong> — for advertising</li>
                        <li><strong>Law enforcement</strong> — if required by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">7. Data Retention</h2>
                    <p className="leading-relaxed">
                        Since most of our tools process data entirely in your browser, we do not retain the data you input into our tools. Analytics data is retained in accordance with Google Analytics&apos; data retention policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">8. Your Rights (GDPR / CCPA)</h2>
                    <p className="leading-relaxed">
                        Depending on your location, you may have the right to: access your personal data, request deletion, object to processing, and opt out of advertising cookies. To exercise these rights, contact us at the email below.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">9. Children&apos;s Privacy</h2>
                    <p className="leading-relaxed">
                        ToolHub is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">10. Changes to This Policy</h2>
                    <p className="leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated &quot;last updated&quot; date.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-4 glass rounded-xl p-6">
                        <p><strong>ToolHub</strong></p>
                        <p>Email: <a href="mailto:privacy@toolhub.app" className="text-purple-600 underline">privacy@toolhub.app</a></p>
                        <p>Website: <a href="https://toolhub.app" className="text-purple-600 underline">https://toolhub.app</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
