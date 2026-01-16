export default function BlogPage() {
    const posts = [
        {
            title: "Top 10 Free Image Compression Tools in 2026",
            slug: "best-image-compression-tools-2026",
            excerpt: "Discover the best free image compression tools that help reduce file size without losing quality.",
            date: "Jan 15, 2026",
        },
        {
            title: "JSON Formatting Best Practices for Developers",
            slug: "json-formatting-best-practices",
            excerpt: "Learn how to properly format and validate JSON for better code readability and debugging.",
            date: "Jan 14, 2026",
        },
        {
            title: "Complete Guide to QR Codes: Creation and Usage",
            slug: "qr-code-complete-guide",
            excerpt: "Everything you need to know about QR codes, from creation to practical applications.",
            date: "Jan 13, 2026",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-black mb-4 gradient-text">Blog</h1>
            <p className="text-xl text-gray-600 mb-12">Guides, tutorials, and tips for using our tools</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="glass rounded-2xl p-6 card-hover"
                    >
                        <div className="text-sm text-purple-600 font-semibold mb-2">{post.date}</div>
                        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <span className="text-primary font-semibold">Read More →</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
