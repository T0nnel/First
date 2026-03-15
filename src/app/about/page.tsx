import type { Metadata } from 'next';
import { Wrench, Heart, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About ToolHub - Free Online Tools for Everyone',
    description: 'Learn about ToolHub, our mission to provide free, fast, and privacy-friendly online tools for developers, designers, and content creators.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-5xl font-black mb-6 gradient-text">About ToolHub</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl">
                ToolHub was built with one simple idea: everyone deserves access to powerful, professional tools — without paywalls, without signups, and without uploading your private files to someone else&apos;s server.
            </p>

            {/* Mission */}
            <div className="glass rounded-3xl p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="text-pink-500" size={36} />
                    Our Mission
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    We believe that the best tools are the ones that just work — instantly, privately, and for free. ToolHub processes everything in your browser, meaning your files and data never leave your device. We want to be the go-to toolbox for everyday internet users, developers, students, designers, and content creators around the world.
                </p>
            </div>

            {/* Why We Built This */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass rounded-2xl p-6 text-center">
                    <Zap className="mx-auto mb-4 text-yellow-500" size={40} />
                    <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No waiting for uploads or server processing. Everything runs in your browser in milliseconds.</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                    <Heart className="mx-auto mb-4 text-red-500" size={40} />
                    <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Your files never leave your device. We don&apos;t store, access, or transmit your data.</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                    <Globe className="mx-auto mb-4 text-blue-500" size={40} />
                    <h3 className="text-xl font-bold mb-2">Always Free</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">All 16+ core tools are free forever. We sustain the site through respectful advertising and optional premium plans.</p>
                </div>
            </div>

            {/* The Tools */}
            <div className="glass rounded-3xl p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Wrench className="text-purple-500" size={36} />
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { cat: '📷 Image Tools', tools: 'Compress, resize, crop, convert, and encode images — all without quality loss.' },
                        { cat: '📝 Text Tools', tools: 'Word counter, case converter, text diff, lorem ipsum generator, ASCII art — and more.' },
                        { cat: '💻 Developer Tools', tools: 'JSON formatter, Base64 encoder, URL encoder, QR generator, hash generator, color picker.' },
                    ].map((item) => (
                        <div key={item.cat} className="bg-white/30 dark:bg-white/5 rounded-xl p-5">
                            <div className="font-bold mb-2">{item.cat}</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.tools}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center glass rounded-3xl p-10">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Have a suggestion for a new tool? Found a bug? We&apos;d love to hear from you.</p>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}
