/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable image optimization
    images: {
        domains: ['api.qrserver.com'],
        formats: ['image/avif', 'image/webp'],
    },
    // Compress pages
    compress: true,
    // Enable SWC minification
    swcMinify: true,
    // Production optimizations
    productionBrowserSourceMaps: false,
    // Headers for SEO
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
