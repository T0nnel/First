import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Google Analytics - Add your tracking ID */}
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}

                {/* AdSense - Add your publisher ID */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8193538495795562"
                    crossOrigin="anonymous"></script>
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-3xl">🛠️</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">ToolHub</span>
                    </a>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
                                <a href="/" className="hover:text-primary dark:hover:text-primary-light transition">Home</a>
                                <a href="/tools" className="hover:text-primary dark:hover:text-primary-light transition">All Tools</a>
                                <a href="/blog" className="hover:text-primary dark:hover:text-primary-light transition">Blog</a>
                                <a href="/about" className="hover:text-primary dark:hover:text-primary-light transition">About</a>
                                <a href="/contact" className="hover:text-primary dark:hover:text-primary-light transition">Contact</a>
                            </nav>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20 transition-colors">
            <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; 2026 ToolHub. All tools are free forever.</p>
                <p className="mt-2 text-sm flex flex-wrap justify-center gap-x-3 gap-y-1">
                    <a href="/privacy" className="hover:text-primary dark:hover:text-primary-light transition">Privacy Policy</a>
                    <span>|</span>
                    <a href="/terms" className="hover:text-primary dark:hover:text-primary-light transition">Terms of Service</a>
                    <span>|</span>
                    <a href="/about" className="hover:text-primary dark:hover:text-primary-light transition">About</a>
                    <span>|</span>
                    <a href="/contact" className="hover:text-primary dark:hover:text-primary-light transition">Contact</a>
                </p>
            </div>
        </footer>
    );
}
