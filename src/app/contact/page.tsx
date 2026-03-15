import type { Metadata } from 'next';
import { Mail, MessageSquare, Bug, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - ToolHub',
    description: 'Get in touch with ToolHub. Report bugs, suggest new tools, or ask questions about our free online tools.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-5xl font-black mb-4 gradient-text">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you within 24–48 hours.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <div className="glass rounded-xl p-5 text-center">
                    <Bug className="mx-auto mb-3 text-red-500" size={32} />
                    <div className="font-bold mb-1">Bug Report</div>
                    <div className="text-sm text-gray-500">Found something broken?</div>
                </div>
                <div className="glass rounded-xl p-5 text-center">
                    <Lightbulb className="mx-auto mb-3 text-yellow-500" size={32} />
                    <div className="font-bold mb-1">Tool Suggestion</div>
                    <div className="text-sm text-gray-500">Request a new tool</div>
                </div>
                <div className="glass rounded-xl p-5 text-center">
                    <MessageSquare className="mx-auto mb-3 text-purple-500" size={32} />
                    <div className="font-bold mb-1">General Enquiry</div>
                    <div className="text-sm text-gray-500">Anything else</div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form
                    action="mailto:hello@toolhub.app"
                    method="get"
                    encType="text/plain"
                    className="space-y-5"
                >
                    <div>
                        <label className="block font-semibold mb-2" htmlFor="name">Your Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Jane Smith"
                            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-xl focus:border-purple-500 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2" htmlFor="subject">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-xl focus:border-purple-500 outline-none transition"
                        >
                            <option>🐛 Bug Report</option>
                            <option>💡 Tool Suggestion</option>
                            <option>💼 Business / Advertising</option>
                            <option>❓ General Question</option>
                            <option>🔒 Privacy Concern</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2" htmlFor="body">Message</label>
                        <textarea
                            id="body"
                            name="body"
                            required
                            placeholder="Tell us what's on your mind..."
                            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-xl focus:border-purple-500 outline-none transition h-36 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Direct Email */}
            <div className="text-center glass rounded-2xl p-6">
                <Mail className="mx-auto mb-3 text-purple-500" size={28} />
                <p className="text-gray-600 dark:text-gray-400">
                    Prefer email directly?{' '}
                    <a href="mailto:hello@toolhub.app" className="text-purple-600 dark:text-purple-400 font-bold underline">
                        hello@toolhub.app
                    </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">We typically respond within 24–48 hours.</p>
            </div>
        </div>
    );
}
