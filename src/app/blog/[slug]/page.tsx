import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const blogPosts: Record<string, {
    title: string;
    description: string;
    date: string;
    readTime: string;
    content: string;
}> = {
    'best-image-compression-tools-2026': {
        title: 'Top 10 Free Image Compression Tools in 2026',
        description: 'Discover the best free image compression tools that help reduce file size without losing quality.',
        date: 'January 15, 2026',
        readTime: '6 min read',
        content: `
## Why Image Compression Matters

Image file sizes directly affect your website load time, mobile data usage, and storage costs. A page that loads in under 2 seconds can reduce bounce rates by up to 40%. Yet most images uploaded directly from a camera or design tool are far larger than they need to be.

The good news? You can dramatically reduce file sizes — often by 60–90% — without any visible quality loss, using the right compression tool.

## What to Look for in an Image Compressor

Before diving into the list, here are the key features to judge each tool by:

- **Compression ratio**: How much can it shrink the file?
- **Quality preservation**: Does the image still look sharp?
- **Format support**: JPG, PNG, WEBP, AVIF?
- **Privacy**: Does it process files locally or upload them?
- **Batch processing**: Can it handle multiple files at once?

## The Top 10 Tools

### 1. ToolHub Image Compressor (Best Overall)
Our own [Image Compressor](/tools/image-compressor) processes files entirely in your browser using modern compression algorithms. Zero upload required, zero privacy risk, and results in seconds. Supports JPG, PNG, and WEBP.

**Best for**: Privacy-conscious users and those who want instant results.

### 2. Squoosh (by Google)
Squoosh is a powerful web-based compression tool by Google that supports advanced codecs like AVIF and JXL. It offers a live before/after slider so you can see exactly what you're getting.

**Best for**: Advanced users who want fine-grained control over codec settings.

### 3. TinyPNG / TinyJPG
TinyPNG has been a staple for web developers for years. It uses smart lossy compression to reduce PNG and JPG files. The free plan allows up to 20 files per batch.

**Best for**: Quick, reliable compression of PNGs.

### 4. Compress.io
A clean, minimal interface that supports JPG, PNG, GIF, and SVG. Very easy to use with drag-and-drop functionality.

**Best for**: Beginners who want simplicity.

### 5. ImageOptim (Mac Only)
If you're on a Mac, ImageOptim is the gold standard for desktop compression. It strips unnecessary metadata and compresses without quality loss.

**Best for**: Mac desktop users.

### 6. RIOT (Windows Only)
Radical Image Optimization Tool (RIOT) for Windows gives granular control over compression levels with a dual-view preview.

**Best for**: Windows desktop users.

### 7. Kraken.io
A professional-grade image optimization API and web tool. The free plan supports files up to 1MB.

**Best for**: Developers integrating compression into workflows.

### 8. Optimizilla
Simple browser tool that lets you adjust quality with a slider. Good for quick, visual compression with JPEG and PNG.

**Best for**: Visual preview-based compression.

### 9. ShortPixel
Particularly well-known for its WordPress plugin, ShortPixel also works as a web tool. Offers both lossy and lossless modes.

**Best for**: WordPress users.

### 10. Recompressor
Automatically tests multiple compression levels and picks the best result. Great for when you don't want to manually tune settings.

**Best for**: Automation and hands-off optimization.

## Quick Comparison Table

| Tool | Free | Browser-based | Batch | Privacy |
|------|------|--------------|-------|---------|
| ToolHub | ✅ 100% | ✅ | ✅ | ✅ Local |
| Squoosh | ✅ | ✅ | ❌ | ✅ Local |
| TinyPNG | ✅ (20/day) | ✅ | ✅ | ❌ Uploads |
| Kraken.io | ✅ (1MB) | ✅ | ✅ | ❌ Uploads |
| ImageOptim | ✅ | ❌ (Desktop) | ✅ | ✅ Local |

## Verdict

For most everyday users, **ToolHub's Image Compressor** is the best choice — it's 100% free, processes images locally in your browser for maximum privacy, and delivers excellent compression results instantly. For power users who need advanced codec control, **Squoosh** is unbeatable.

Ready to try it? **[Compress your image now →](/tools/image-compressor)**
        `
    },
    'json-formatting-best-practices': {
        title: 'JSON Formatting Best Practices for Developers',
        description: 'Learn how to properly format and validate JSON for better code readability and debugging.',
        date: 'January 14, 2026',
        readTime: '5 min read',
        content: `
## What Is JSON?

JSON (JavaScript Object Notation) is the most widely used data interchange format on the internet. It's used in REST APIs, configuration files, databases, and virtually every web application. Despite its simplicity, poorly formatted JSON is one of the most common sources of bugs and developer frustration.

## Why Formatting Matters

Raw, minified JSON is great for production — it's compact and fast to transmit. But for development, debugging, and documentation, properly indented and structured JSON is essential for:

- **Readability**: Spot structure issues at a glance
- **Debugging**: Find missing commas, brackets, and quotes instantly
- **Code reviews**: Teammates can understand data structures quickly
- **Documentation**: API responses are self-explanatory when formatted

## Core JSON Formatting Rules

### 1. Consistent Indentation
Always use consistent indentation — either 2 or 4 spaces. Tabs can cause inconsistencies across different editors.

\`\`\`json
// ❌ Bad - No indentation
{"user":{"name":"John","age":30,"hobbies":["reading","coding"]}}

// ✅ Good - 2-space indentation
{
  "user": {
    "name": "John",
    "age": 30,
    "hobbies": ["reading", "coding"]
  }
}
\`\`\`

### 2. Use Double Quotes, Always
JSON strictly requires double quotes for keys and string values. Single quotes are invalid JSON.

\`\`\`json
// ❌ Invalid JSON
{ 'name': 'John' }

// ✅ Valid JSON
{ "name": "John" }
\`\`\`

### 3. No Trailing Commas
Unlike JavaScript, JSON does not allow trailing commas after the last item in an object or array.

\`\`\`json
// ❌ Invalid JSON
{
  "name": "John",
  "age": 30,
}

// ✅ Valid JSON
{
  "name": "John",
  "age": 30
}
\`\`\`

### 4. Use Arrays for Ordered Lists
When data is ordered or a list is interchangeable, use arrays. Use objects when data has named properties.

\`\`\`json
// ✅ Good use of arrays
{
  "colors": ["red", "green", "blue"],
  "user": {
    "name": "Alice",
    "role": "admin"
  }
}
\`\`\`

### 5. Validate Before Using
Never trust JSON from external sources. Always validate it first to avoid runtime errors.

## Common JSON Mistakes

| Mistake | Effect |
|---------|--------|
| Missing closing bracket | Parse error |
| Extra comma after last item | Parse error |
| Single quotes | Parse error |
| Unquoted keys | Parse error |
| Comments in JSON | Parse error (JSON doesn't support comments) |
| \`undefined\` values | Silently dropped |
| \`NaN\` / \`Infinity\` | Invalid — not supported |

## Tools to Format JSON Instantly

Rather than manually counting braces and commas, use a dedicated JSON formatter:

- **[ToolHub JSON Formatter](/tools/json-formatter)** — Formats, minifies, and validates JSON in your browser instantly
- **VS Code** — Built-in JSON formatting with \`Shift+Alt+F\`
- **jq** — Command-line JSON processor for power users

## Best Practices Summary

1. ✅ Always validate JSON from external APIs before parsing
2. ✅ Use 2-space indentation for readability
3. ✅ Use double quotes for all strings
4. ✅ Never use trailing commas
5. ✅ Keep JSON strictly data — no functions, comments, or undefined
6. ✅ Use a formatter tool during development

Want to format JSON right now? **[Try our JSON Formatter →](/tools/json-formatter)**
        `
    },
    'qr-code-complete-guide': {
        title: 'Complete Guide to QR Codes: Creation and Usage',
        description: 'Everything you need to know about QR codes, from creation to practical applications.',
        date: 'January 13, 2026',
        readTime: '7 min read',
        content: `
## What Is a QR Code?

QR code stands for **Quick Response** code. It's a two-dimensional barcode that can encode text, URLs, contact information, Wi-Fi credentials, payment details, and much more. Unlike traditional barcodes that can only be scanned in one direction, QR codes can be read from any angle.

Originally invented in 1994 by Denso Wave (a Toyota subsidiary) to track automotive parts, QR codes went mainstream around 2020 when contactless menus, payments, and check-ins became essential during the pandemic.

## How QR Codes Work

A QR code encodes data using black and white squares arranged in a grid pattern. The three square markers in the corners help scanners identify direction and orientation. The density of the pattern determines how much data can be stored.

**QR code capacities vary by version (size):
- **Low capacity**: ~41 characters
- **High capacity**: Up to ~7,089 numeric characters or ~4,296 alphanumeric characters

## What Can You Encode in a QR Code?

| Type | Example Use Case |
|------|-----------------|
| URL | Link to a website, product, or social profile |
| Plain Text | A message, instructions, or promo code |
| Email | Pre-fill a contact email |
| Phone Number | Tap-to-call direct |
| SMS | Send a pre-filled text message |
| Wi-Fi Credentials | Guests scan to join your network automatically |
| vCard | Share contact info that saves directly to phone |
| Payment | PayPal, Venmo, crypto wallet links |
| Event | Calendar event with date, time, and location |
| App Store | Link directly to iOS or Android app download |

## Creating a QR Code: Step by Step

Creating a QR code is easier than ever. Here's how to do it with ToolHub's free generator:

1. **Go to** the [QR Code Generator](/tools/qr-generator)
2. **Enter your data** — a URL, text, or other content
3. **Click Generate** — your QR code appears instantly
4. **Download** the PNG or SVG version
5. **Test it** — scan with your phone camera before publishing!

## QR Code Best Practices

### Size and Placement
- Minimum recommended print size: **2 cm × 2 cm (0.8 × 0.8 inches)**
- Ensure at least 4 modules of white space ("quiet zone") around the QR code
- For billboards or large prints, scale proportionally

### Contrast and Color
- Black on white is best — highest contrast
- You can use custom colors but maintain at least a 70% contrast ratio
- Avoid light-colored modules on light backgrounds

### Error Correction
QR codes have built-in error correction. There are 4 levels:

| Level | Recovery Capacity | Best Use |
|-------|------------------|----------|
| L | 7% | Clean digital environments |
| M | 15% | General use |
| Q | 25% | Industrial environments |
| H | 30% | When logo overlay is used |

Use **Level H** if you're overlaying a logo on the center of the QR code.

### Always Test Before Printing
Before committing to a print run, test your QR code with multiple devices:
- iPhone (native Camera app)
- Android (Google Lens)
- A dedicated QR scanner app

## Common QR Code Mistakes

1. **Too small**: Can't be scanned reliably
2. **Low contrast**: Scanning fails
3. **No quiet zone**: Pattern bleeds into surrounding design
4. **Wrong URL**: Triple-check the link before printing
5. **No call-to-action**: Tell people what to do ("Scan to see menu" not just a naked QR)
6. **Not testing**: Always test before publishing!

## QR Codes for Business

### Marketing
- Business cards with portfolio/contact QR
- Product packaging linking to instructions or reviews
- Event posters linking to registration pages
- Retail displays linking to online stores

### Operations
- Restaurant menus (no printing costs)
- Contactless check-in / loyalty stamps
- Asset tracking (each item gets a unique QR)
- Document authentication

## Free QR Code Generator

Ready to create your own QR code? Our tool is completely free:

- No account required
- Unlimited generations
- High-resolution PNG download
- Instant preview

**[Create your QR code now →](/tools/qr-generator)**
        `
    }
};

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogPosts[params.slug];
    if (!post) return { title: 'Post Not Found - ToolHub Blog' };
    return {
        title: `${post.title} - ToolHub Blog`,
        description: post.description,
        openGraph: { title: post.title, description: post.description, type: 'article' },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];
    if (!post) notFound();

    // Simple markdown-like renderer
    const renderContent = (content: string) => {
        const lines = content.trim().split('\n');
        const elements: React.ReactElement[] = [];
        let i = 0;
        let tableLines: string[] = [];
        let inCodeBlock = false;
        let codeLines: string[] = [];
        let codeLang = '';

        while (i < lines.length) {
            const line = lines[i];

            // Code block handling
            if (line.startsWith('```')) {
                if (!inCodeBlock) {
                    inCodeBlock = true;
                    codeLang = line.slice(3).trim();
                    codeLines = [];
                } else {
                    inCodeBlock = false;
                    elements.push(
                        <pre key={`code-${i}`} className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto text-sm my-4 font-mono">
                            <code>{codeLines.join('\n')}</code>
                        </pre>
                    );
                    codeLines = [];
                }
                i++;
                continue;
            }
            if (inCodeBlock) {
                codeLines.push(line);
                i++;
                continue;
            }

            // Table handling
            if (line.startsWith('|')) {
                tableLines.push(line);
                i++;
                continue;
            } else if (tableLines.length > 0) {
                const headers = tableLines[0].split('|').filter(Boolean).map(h => h.trim());
                const rows = tableLines.slice(2).map(r => r.split('|').filter(Boolean).map(c => c.trim()));
                elements.push(
                    <div key={`table-${i}`} className="overflow-x-auto my-6">
                        <table className="w-full border-collapse glass rounded-xl overflow-hidden">
                            <thead className="bg-purple-600/20">
                                <tr>{headers.map((h, j) => <th key={j} className="p-3 text-left font-bold border-b border-gray-200 dark:border-gray-700">{h}</th>)}</tr>
                            </thead>
                            <tbody>
                                {rows.map((row, ri) => (
                                    <tr key={ri} className="border-b border-gray-100 dark:border-gray-800 hover:bg-white/10 transition">
                                        {row.map((cell, ci) => <td key={ci} className="p-3 text-sm">{cell}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
                tableLines = [];
                continue;
            }

            if (line.startsWith('## ')) {
                elements.push(<h2 key={i} className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">{line.slice(3)}</h2>);
            } else if (line.startsWith('### ')) {
                elements.push(<h3 key={i} className="text-xl font-bold mt-6 mb-3 text-gray-800 dark:text-gray-200">{line.slice(4)}</h3>);
            } else if (line.startsWith('- ') || line.startsWith('* ')) {
                const items: string[] = [];
                while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
                    items.push(lines[i].slice(2));
                    i++;
                }
                elements.push(
                    <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                        {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 underline">$1</a>') }} />)}
                    </ul>
                );
                continue;
            } else if (line.startsWith('1. ')) {
                const items: string[] = [];
                while (i < lines.length && /^\d+\. /.test(lines[i])) {
                    items.push(lines[i].replace(/^\d+\. /, ''));
                    i++;
                }
                elements.push(
                    <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                        {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 underline">$1</a>') }} />)}
                    </ol>
                );
                continue;
            } else if (line.trim() !== '') {
                const html = line
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 dark:text-purple-400 underline font-medium">$1</a>')
                    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm font-mono">$1</code>');
                elements.push(<p key={i} className="leading-relaxed text-gray-700 dark:text-gray-300 my-3" dangerouslySetInnerHTML={{ __html: html }} />);
            }
            i++;
        }

        return elements;
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
                <a href="/" className="hover:text-purple-600 transition">Home</a> /
                <a href="/blog" className="hover:text-purple-600 transition ml-1">Blog</a> /
                <span className="ml-1">{post.title}</span>
            </nav>

            {/* Header */}
            <div className="glass rounded-3xl p-8 mb-10">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="text-purple-600 font-semibold">{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                </div>
                <h1 className="text-4xl font-black mb-4 text-gray-900 dark:text-gray-100 leading-tight">{post.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">{post.description}</p>
            </div>

            {/* Content */}
            <article className="glass rounded-3xl p-8 mb-10">
                {renderContent(post.content)}
            </article>

            {/* Back to Blog */}
            <div className="text-center">
                <a
                    href="/blog"
                    className="inline-flex items-center gap-2 glass px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                    ← Back to Blog
                </a>
            </div>
        </div>
    );
}
