import { ArrowRight, TrendingUp } from "lucide-react";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
                        Free Online Tools for Everyone
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
                        20+ powerful tools. No login required. 100% free forever.
                    </p>
                    <div className="flex justify-center gap-8 mb-8">
                        <div>
                            <div className="text-4xl font-bold">20+</div>
                            <div className="text-sm opacity-80">Tools</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">100%</div>
                            <div className="text-sm opacity-80">Free</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">0</div>
                            <div className="text-sm opacity-80">Registration</div>
                        </div>
                    </div>
                    <a href="/tools" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Browse All Tools <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* Ad Space - Top Banner */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wide">Advertisement</p>
                    {/* Add Google AdSense code here */}
                </div>
            </div>

            {/* Popular Tools */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-2 mb-8">
                    <TrendingUp className="text-primary" size={32} />
                    <h2 className="text-3xl font-bold">Most Popular Tools</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolCard
                        icon="📦"
                        title="Image Compressor"
                        description="Reduce image file size without losing quality"
                        href="/tools/image-compressor"
                        badge="Popular"
                    />
                    <ToolCard
                        icon="🔢"
                        title="Word Counter"
                        description="Count words, characters, and sentences"
                        href="/tools/word-counter"
                        badge="Popular"
                    />
                    <ToolCard
                        icon="{ }"
                        title="JSON Formatter"
                        description="Format and validate JSON data"
                        href="/tools/json-formatter"
                        badge="Popular"
                    />
                    <ToolCard
                        icon="⬛"
                        title="QR Generator"
                        description="Create QR codes instantly"
                        href="/tools/qr-generator"
                    />
                </div>
            </section>

            {/* Image Tools */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">📷 Image Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ToolCard icon="📐" title="Image Resizer" description="Resize images to any dimension" href="/tools/image-resizer" />
                        <ToolCard icon="🔄" title="Image Converter" description="Convert JPG, PNG, WEBP" href="/tools/image-converter" />
                        <ToolCard icon="✂️" title="Image Cropper" description="Crop images perfectly" href="/tools/image-cropper" />
                        <ToolCard icon="🖼️" title="Image to Base64" description="Convert images to Base64" href="/tools/image-to-base64" />
                    </div>
                </div>
            </section>

            {/* Text Tools */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-8">📝 Text Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolCard icon="🔤" title="Case Converter" description="UPPER, lower, Title Case" href="/tools/case-converter" />
                    <ToolCard icon="⚖️" title="Text Diff" description="Compare two texts" href="/tools/text-diff" />
                    <ToolCard icon="📜" title="Lorem Ipsum" description="Generate placeholder text" href="/tools/lorem-generator" />
                    <ToolCard icon="🔠" title="Text to ASCII" description="Convert text to ASCII art" href="/tools/text-to-ascii" />
                </div>
            </section>

            {/* Developer Tools */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">💻 Developer Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ToolCard icon="🔐" title="Base64 Encoder" description="Encode and decode Base64" href="/tools/base64" />
                        <ToolCard icon="🎨" title="Color Picker" description="HEX, RGB, HSL converter" href="/tools/color-picker" />
                        <ToolCard icon="🔗" title="URL Encoder" description="Encode and decode URLs" href="/tools/url-encoder" />
                        <ToolCard icon="🔑" title="Hash Generator" description="MD5, SHA1, SHA256" href="/tools/hash-generator" />
                    </div>
                </div>
            </section>

            {/* Ad Space - Bottom */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wide">Advertisement</p>
                    {/* Add Google AdSense code here */}
                </div>
            </div>
        </div>
    );
}

function ToolCard({ icon, title, description, href, badge }: { icon: string; title: string; description: string; href: string; badge?: string }) {
    return (
        <a
            href={href}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300 group relative"
        >
            {badge && (
                <span className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                    {badge}
                </span>
            )}
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </a>
    );
}
