import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - ToolHub',
    description: 'Read the Terms of Service for using ToolHub free online tools.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-5xl font-black mb-4 gradient-text">Terms of Service</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 text-sm">Last updated: March 15, 2026</p>

            <div className="space-y-10 text-gray-800 dark:text-gray-200">

                <section>
                    <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed">
                        By accessing and using ToolHub (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">2. Description of Service</h2>
                    <p className="leading-relaxed">
                        ToolHub provides free online tools for image processing, text manipulation, and developer utilities. All tools operate client-side in your browser where possible. No account or registration is required to use any tool.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">3. Permitted Use</h2>
                    <p className="leading-relaxed mb-4">You may use ToolHub for any lawful purpose. You agree NOT to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Use the Service to process or distribute illegal content</li>
                        <li>Attempt to reverse-engineer or scrape the site</li>
                        <li>Use automated bots or scripts to overload our servers</li>
                        <li>Use tools to infringe on third-party intellectual property</li>
                        <li>Attempt to circumvent any security or access controls</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">4. Intellectual Property</h2>
                    <p className="leading-relaxed">
                        The ToolHub website, including its design, code, and branding, is owned by ToolHub and protected by intellectual property laws. The tools&apos; open-source dependencies are subject to their respective licenses. You retain all ownership of any content you process through our tools.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">5. Disclaimer of Warranties</h2>
                    <p className="leading-relaxed">
                        ToolHub is provided &quot;as is&quot; and &quot;as available&quot; without any warranties, express or implied. We do not guarantee that the Service will be error-free, uninterrupted, or produce specific results. Use the tools at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">6. Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        To the maximum extent permitted by law, ToolHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">7. Premium Services</h2>
                    <p className="leading-relaxed">
                        ToolHub may offer paid premium features. Any fees paid for premium subscriptions are non-refundable unless required by law. Premium features are provided as described on the Premium page and may change with notice.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">8. Third-Party Services & Advertising</h2>
                    <p className="leading-relaxed">
                        ToolHub displays advertisements provided by Google AdSense and may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of third-party sites. Advertising is clearly labelled as such.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">9. Privacy</h2>
                    <p className="leading-relaxed">
                        Your use of the Service is also governed by our <a href="/privacy" className="text-purple-600 underline">Privacy Policy</a>, which is incorporated by reference into these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">10. Changes to Terms</h2>
                    <p className="leading-relaxed">
                        We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance of the new Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">11. Governing Law</h2>
                    <p className="leading-relaxed">
                        These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms shall be resolved through appropriate legal channels.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
                    <p className="leading-relaxed">
                        For questions about these Terms, please contact us at:
                    </p>
                    <div className="mt-4 glass rounded-xl p-6">
                        <p><strong>ToolHub</strong></p>
                        <p>Email: <a href="mailto:legal@toolhub.app" className="text-purple-600 underline">legal@toolhub.app</a></p>
                        <p>Website: <a href="https://toolhub.app" className="text-purple-600 underline">https://toolhub.app</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
