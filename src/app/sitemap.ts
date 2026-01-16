import type { MetadataRoute } from 'next';
import { getAllToolSlugs } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yourdomain.com';
    const toolSlugs = getAllToolSlugs();

    const toolPages = toolSlugs.map((slug) => ({
        url: `${baseUrl}/tools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...toolPages,
    ];
}
