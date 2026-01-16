export default function AdvertisePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-5xl font-black mb-6 gradient-text">Advertise with ToolHub</h1>
            <p className="text-xl text-gray-600 mb-12">
                Reach thousands of developers, designers, and content creators
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass rounded-xl p-6 text-center">
                    <div className="text-4xl font-black gradient-text">10k+</div>
                    <div className="text-gray-600 mt-2">Monthly Visitors</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                    <div className="text-4xl font-black gradient-text">50k+</div>
                    <div className="text-gray-600 mt-2">Tool Uses/Month</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                    <div className="text-4xl font-black gradient-text">16</div>
                    <div className="text-gray-600 mt-2">Popular Tools</div>
                </div>
            </div>

            {/* Sponsorship Options */}
            <div className="glass rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Sponsorship Options</h2>

                {/* Featured Tool Spot */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                    <h3 className="text-2xl font-bold mb-3">Featured Tool Listing</h3>
                    <p className="text-gray-600 mb-4">
                        Prominent placement on homepage and tool pages with "SPONSORED" badge
                    </p>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-semibold">Includes:</div>
                            <ul className="text-sm text-gray-600 ml-4 mt-2">
                                <li>• Homepage featured section</li>
                                <li>• Tool page sidebar placement</li>
                                <li>• Branded badge and description</li>
                                <li>• Tracking link with analytics</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-black gradient-text">$20</div>
                            <div className="text-sm text-gray-500">/month</div>
                        </div>
                    </div>
                </div>

                {/* Banner Ad */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                    <h3 className="text-2xl font-bold mb-3">Banner Advertisement</h3>
                    <p className="text-gray-600 mb-4">
                        728x90 banner on high-traffic tool pages
                    </p>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-semibold">Includes:</div>
                            <ul className="text-sm text-gray-600 ml-4 mt-2">
                                <li>• Top of page placement</li>
                                <li>• 100% visibility</li>
                                <li>• Click tracking</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-black gradient-text">$50</div>
                            <div className="text-sm text-gray-500">/month</div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Sponsorship */}
                <div className="pb-6">
                    <h3 className="text-2xl font-bold mb-3">Newsletter Sponsorship</h3>
                    <p className="text-gray-600 mb-4">
                        Dedicated mention in weekly newsletter (Coming Soon)
                    </p>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-semibold">Includes:</div>
                            <ul className="text-sm text-gray-600 ml-4 mt-2">
                                <li>• Featured product description</li>
                                <li>• Direct newsletter placement</li>
                                <li>• Exclusive audience reach</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-black gradient-text">$100</div>
                            <div className="text-sm text-gray-500">/issue</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get Started</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-2">Company Name</label>
                        <input type="text" className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="Your company" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Email</label>
                        <input type="email" className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="you@company.com" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Interested In</label>
                        <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                            <option>Featured Tool Listing ($20/mo)</option>
                            <option>Banner Ad ($50/mo)</option>
                            <option>Newsletter Sponsorship ($100/issue)</option>
                            <option>Custom Package</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Message</label>
                        <textarea className="w-full p-3 border-2 border-gray-300 rounded-lg h-32" placeholder="Tell us about your product..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-xl transition">
                        Submit Inquiry
                    </button>
                </form>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
                We typically respond within 24 hours. All sponsorships are month-to-month with no long-term commitment.
            </p>
        </div>
    );
}
