import { Wrench } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="glass rounded-3xl p-12 max-w-lg">
                <div className="text-8xl mb-6">🔍</div>
                <h1 className="text-6xl font-black mb-4 gradient-text">404</h1>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Page Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Oops! The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
                    >
                        🏠 Go Home
                    </a>
                    <a
                        href="/tools"
                        className="inline-flex items-center justify-center gap-2 glass px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all text-gray-800 dark:text-gray-200"
                    >
                        <Wrench size={18} />
                        Browse Tools
                    </a>
                </div>
            </div>
        </div>
    );
}
