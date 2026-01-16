import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ToolHub - Free Online Tools | Image, PDF, Text & Developer Tools",
    description: "20+ free online tools for everyone. Image compressor, word counter, JSON formatter, QR generator, and more. No registration required.",
    keywords: "free online tools, image compressor, word counter, json formatter, pdf converter, text tools, developer tools",
    authors: [{ name: "ToolHub" }],
    openGraph: {
        title: "ToolHub - Free Online Tools",
        description: "20+ free tools. No login required.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ToolHub - Free Online Tools",
        description: "20+ free tools. No login required.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.Node;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics - Add your tracking ID */}
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}

                {/* AdSense - Add your publisher ID */}
                {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script> */}
            </head>
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="flex items center gap-2">
                        <span className="text-3xl">🛠️</span>
                        <span className="text-2xl font-bold text-primary">ToolHub</span>
                    </a>
                    <nav className="hidden md:flex gap-4">
                        <a href="/" className="hover:text-primary transition">Home</a>
                        <a href="/tools" className="hover:text-primary transition">All Tools</a>
                        <a href="/blog" className="hover:text-primary transition">Blog</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-100 border-t mt-20">
            <div className="container mx-auto px-4 py-8 text-center text-gray-600">
                <p>&copy; 2026 ToolHub. All tools are free forever.</p>
                <p className="mt-2 text-sm">
                    <a href="/privacy" className="hover:text-primary">Privacy</a> |
                    <a href="/terms" className="hover:text-primary ml-2">Terms</a>
                </p>
            </div>
        </footer>
    );
}
