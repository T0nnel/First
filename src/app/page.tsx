import { ArrowRight, TrendingUp, Sparkles, Zap, Rocket, Star } from "lucide-react";

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section with Glassmorphism */}
            <section className="relative z-10 py-24 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 shadow-lg animate-slide-down">
                        <Sparkles className="text-yellow-500 animate-pulse" size={20} />
                        <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            20+ Free Tools & Growing Daily
                        </span>
                        <Sparkles className="text-yellow-500 animate-pulse" size={20} />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in leading-tight">
                        <span className="gradient-text drop-shadow-lg">Free Online Tools</span>
                        <br />
                        <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                            for Everyone
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 animate-slide-up font-medium">
                        Professional tools at your fingertips. <span className="text-purple-600 font-bold">No login</span>. <span className="text-pink-600 font-bold">No limits</span>. <span className="text-indigo-600 font-bold">100% free forever</span>.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mb-12 flex-wrap">
                        <div className="glass px-8 py-6 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 animate-scale-in">
                            <div className="text-5xl font-black gradient-text">20+</div>
                            <div className="text-sm font-semibold text-gray-600 mt-2">Powerful Tools</div>
                        </div>
                        <div className="glass px-8 py-6 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                            <div className="text-5xl font-black text-green-600">100%</div>
                            <div className="text-sm font-semibold text-gray-600 mt-2">Free Forever</div>
                        </div>
                        <div className="glass px-8 py-6 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                            <div className="text-5xl font-black text-blue-600">0</div>
                            <div className="text-sm font-semibold text-gray-600 mt-2">Registration</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/tools"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 animate-glow"
                        >
                            <Rocket className="group-hover:animate-float" size={24} />
                            Browse All Tools
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                        </a>
                        <a
                            href="#popular"
                            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <Star size={24} className="text-yellow-500" />
                            Popular Tools
                        </a>
                    </div>
                </div>
            </section>

            {/* Popular Tools */}
            <section id="popular" className="relative z-10 container mx-auto px-4 py-16">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <TrendingUp className="text-purple-600 animate-float" size={40} />
                    <h2 className="text-5xl font-black gradient-text">Most Popular</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
                    <ToolCard
                        icon="📦"
                        title="Image Compressor"
                        description="Reduce image file size without losing quality"
                        href="/tools/image-compressor"
                        badge="🔥 HOT"
                        delay="0s"
                    />
                    <ToolCard
                        icon="🔢"
                        title="Word Counter"
                        description="Count words, characters, and sentences"
                        href="/tools/word-counter"
                        badge="⭐ POPULAR"
                        delay="0.1s"
                    />
                    <ToolCard
                        icon="{ }"
                        title="JSON Formatter"
                        description="Format and validateJSON data instantly"
                        href="/tools/json-formatter"
                        badge="⭐ POPULAR"
                        delay="0.2s"
                    />
                    <ToolCard
                        icon="⬛"
                        title="QR Generator"
                        description="Create QR codes in seconds"
                        href="/tools/qr-generator"
                        badge="✨ NEW"
                        delay="0.3s"
                    />
                </div>
            </section>

            {/* Image Tools */}
            <section className="relative z-10 py-16">
                <div className="glass mx-4 md:mx-8 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
                            <span className="text-5xl animate-float">📷</span>
                            Image Tools
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ToolCard icon="📐" title="Image Resizer" description="Resize to any dimension" href="/tools/image-resizer" />
                            <ToolCard icon="🔄" title="Image Converter" description="JPG, PNG, WEBP formats" href="/tools/image-converter" />
                            <ToolCard icon="✂️" title="Image Cropper" description="Crop perfectly" href="/tools/image-cropper" />
                            <ToolCard icon="🖼️" title="Image to Base64" description="Convert to Base64" href="/tools/image-to-base64" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Text Tools */}
            <section className="relative z-10 container mx-auto px-4 py-16">
                <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
                    <span className="text-5xl animate-float">📝</span>
                    Text Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolCard icon="🔤" title="Case Converter" description="UPPER, lower, Title Case" href="/tools/case-converter" />
                    <ToolCard icon="⚖️" title="Text Diff" description="Compare two texts" href="/tools/text-diff" />
                    <ToolCard icon="📜" title="Lorem Ipsum" description="Generate placeholder text" href="/tools/lorem-generator" />
                    <ToolCard icon="🔠" title="Text to ASCII" description="Convert to ASCII art" href="/tools/text-to-ascii" />
                </div>
            </section>

            {/* Developer Tools */}
            <section className="relative z-10 py-16">
                <div className="glass mx-4 md:mx-8 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
                            <span className="text-5xl animate-float">💻</span>
                            Developer Tools
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ToolCard icon="🔐" title="Base64 Encoder" description="Encode & decode Base64" href="/tools/base64" />
                            <ToolCard icon="🎨" title="Color Picker" description="HEX, RGB, HSL converter" href="/tools/color-picker" />
                            <ToolCard icon="🔗" title="URL Encoder" description="Encode & decode URLs" href="/tools/url-encoder" />
                            <ToolCard icon="🔑" title="Hash Generator" description="MD5, SHA1, SHA256" href="/tools/hash-generator" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 container mx-auto px-4 py-20">
                <div className="glass rounded-3xl p-12 text-center shadow-2xl">
                    <Zap className="mx-auto mb-6 text-yellow-500 animate-pulse" size={64} />
                    <h2 className="text-4xl font-black mb-4 gradient-text">Start Using Tools Now</h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust our tools every day. No signup required!
                    </p>
                    <a
                        href="/tools"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                    >
                        Get Started Free
                        <ArrowRight size={24} />
                    </a>
                </div>
            </section>
        </div>
    );
}

function ToolCard({
    icon,
    title,
    description,
    href,
    badge,
    delay = "0s"
}: {
    icon: string;
    title: string;
    description: string;
    href: string;
    badge?: string;
    delay?: string;
}) {
    return (
        <a
            href={href}
            className="group relative glass rounded-2xl p-6 card-hover overflow-hidden animate-scale-in"
            style={{ animationDelay: delay }}
        >
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 shimmer-effect"></div>
            </div>

            {/* Badge */}
            {badge && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg animate-pulse">
                    {badge}
                </span>
            )}

            {/* Icon */}
            <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                {description}
            </p>

            {/* Arrow Icon */}
            <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Try it now <ArrowRight size={16} className="ml-1" />
            </div>
        </a>
    );
}
