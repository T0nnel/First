export default function PremiumPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                    <span className="gradient-text">Premium Features</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Unlock advanced features, batch processing, and remove all ads
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {/* Free Tier */}
                <div className="glass rounded-3xl p-8 border-2 border-gray-200">
                    <h3 className="text-2xl font-bold mb-4">Free</h3>
                    <div className="text-5xl font-black mb-6">$0<span className="text-xl text-gray-500">/mo</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>All 16 tools</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Single file processing</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>With ads</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Batch processing</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 border-2 border-gray-300 rounded-xl font-semibold hover:border-primary transition">
                        Current Plan
                    </button>
                </div>

                {/* Pro Tier - HIGHLIGHTED */}
                <div className="glass rounded-3xl p-8 border-4 border-purple-500 relative transform scale-105 shadow-2xl">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Pro</h3>
                    <div className="text-5xl font-black mb-6 gradient-text">$5<span className="text-xl text-gray-500">/mo</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>All 16 tools</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>No ads</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>Batch processing (10 files)</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Priority support</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-xl transition">
                        Upgrade to Pro
                    </button>
                </div>

                {/* Business Tier */}
                <div className="glass rounded-3xl p-8 border-2 border-gray-200">
                    <h3 className="text-2xl font-bold mb-4">Business</h3>
                    <div className="text-5xl font-black mb-6">$15<span className="text-xl text-gray-500">/mo</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Everything in Pro</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>Unlimited batch processing</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span><strong>API access</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Custom integrations</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition">
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Features Comparison */}
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Feature Comparison</h2>
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2">
                            <th className="text-left py-4">Feature</th>
                            <th className="text-center py-4">Free</th>
                            <th className="text-center py-4">Pro</th>
                            <th className="text-center py-4">Business</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-4">All Tools</td>
                            <td className="text-center">✓</td>
                            <td className="text-center">✓</td>
                            <td className="text-center">✓</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-4">Ads</td>
                            <td className="text-center">Yes</td>
                            <td className="text-center">No</td>
                            <td className="text-center">No</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-4">Batch Processing</td>
                            <td className="text-center">-</td>
                            <td className="text-center">10 files</td>
                            <td className="text-center">Unlimited</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-4">API Access</td>
                            <td className="text-center">-</td>
                            <td className="text-center">-</td>
                            <td className="text-center">✓</td>
                        </tr>
                        <tr>
                            <td className="py-4">Support</td>
                            <td className="text-center">Community</td>
                            <td className="text-center">Priority</td>
                            <td className="text-center">Dedicated</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 glass rounded-xl font-semibold hover:shadow-xl transition">
                    Contact Us
                </a>
            </div>
        </div>
    );
}
