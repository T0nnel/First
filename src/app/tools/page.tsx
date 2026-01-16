export default function ToolsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-black mb-4 gradient-text">All Tools</h1>
            <p className="text-xl text-gray-600 mb-12">Browse our complete collection of free online tools</p>

            {/* Image Tools */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">📷 Image Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolLink href="/tools/image-compressor" title="Image Compressor" icon="📦" />
                    <ToolLink href="/tools/image-resizer" title="Image Resizer" icon="📐" />
                    <ToolLink href="/tools/image-converter" title="Image Converter" icon="🔄" />
                    <ToolLink href="/tools/image-cropper" title="Image Cropper" icon="✂️" />
                    <ToolLink href="/tools/image-to-base64" title="Image to Base64" icon="🖼️" />
                </div>
            </section>

            {/* Text Tools */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">📝 Text Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolLink href="/tools/word-counter" title="Word Counter" icon="🔢" />
                    <ToolLink href="/tools/case-converter" title="Case Converter" icon="🔤" />
                    <ToolLink href="/tools/text-diff" title="Text Diff" icon="⚖️" />
                    <ToolLink href="/tools/lorem-generator" title="Lorem Ipsum" icon="📜" />
                    <ToolLink href="/tools/text-to-ascii" title="Text to ASCII" icon="🔠" />
                </div>
            </section>

            {/* Developer Tools */}
            <section>
                <h2 className="text-3xl font-bold mb-6">💻 Developer Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ToolLink href="/tools/json-formatter" title="JSON Formatter" icon="{ }" />
                    <ToolLink href="/tools/base64" title="Base64 Encoder" icon="🔐" />
                    <ToolLink href="/tools/qr-generator" title="QR Generator" icon="⬛" />
                    <ToolLink href="/tools/color-picker" title="Color Picker" icon="🎨" />
                    <ToolLink href="/tools/url-encoder" title="URL Encoder" icon="🔗" />
                    <ToolLink href="/tools/hash-generator" title="Hash Generator" icon="🔑" />
                </div>
            </section>
        </div>
    );
}

function ToolLink({ href, title, icon }: { href: string; title: string; icon: string }) {
    return (
        <a href={href} className="glass rounded-xl p-6 card-hover group">
            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{icon}</div>
            <h3 className="font-bold group-hover:gradient-text transition">{title}</h3>
        </a>
    );
}
