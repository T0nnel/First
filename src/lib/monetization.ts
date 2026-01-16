// Affiliate links configuration
export const affiliateLinks = {
    imageEditing: {
        title: "Best Image Editing Software",
        description: "Professional tools for advanced image editing",
        links: [
            {
                name: "Adobe Photoshop",
                url: "https://www.adobe.com/products/photoshop.html?sdid=AFFILIATE_ID",
                description: "Industry-standard image editing",
                commission: "High",
            },
            {
                name: "Canva Pro",
                url: "https://www.canva.com/join/AFFILIATE_CODE",
                description: "Easy design tool for everyone",
                commission: "Medium",
            },
            {
                name: "Affinity Photo",
                url: "https://affinity.serif.com/photo/?affiliate=AFFILIATE_ID",
                description: "One-time purchase, powerful editing",
                commission: "Medium",
            },
        ],
    },

    hosting: {
        title: "Best Web Hosting for Tools",
        description: "Fast, reliable hosting for your projects",
        links: [
            {
                name: "Vercel Pro",
                url: "https://vercel.com?ref=AFFILIATE_ID",
                description: "Perfect for Next.js apps",
                commission: "Medium",
            },
            {
                name: "DigitalOcean",
                url: "https://www.digitalocean.com/?refcode=AFFILIATE_CODE",
                description: "Scalable cloud hosting",
                commission: "High",
            },
        ],
    },

    development: {
        title: "Developer Tools & Resources",
        description: "Tools to build better products",
        links: [
            {
                name: "GitHub Copilot",
                url: "https://github.com/features/copilot?ref=AFFILIATE",
                description: "AI pair programmer",
                commission: "Low",
            },
            {
                name: "MongoDB Atlas",
                url: "https://www.mongodb.com/cloud/atlas?ref=AFFILIATE_ID",
                description: "Cloud database platform",
                commission: "Medium",
            },
        ],
    },
};

// Sponsored tool spots (placeholder - replace with real sponsors)
export const sponsoredTools = [
    {
        id: 1,
        name: "PDF Advanced Pro",
        description: "Professional PDF editing and conversion",
        href: "https://example.com?ref=toolhub",
        icon: "📄",
        badge: "SPONSORED",
        sponsor: "PDF Company",
        monthly: 20, // $20/month sponsorship
    },
    {
        id: 2,
        name: "Image AI Enhancer",
        description: "AI-powered image enhancement",
        href: "https://example.com?ref=toolhub",
        icon: "🤖",
        badge: "SPONSORED",
        sponsor: "AI Tools Inc",
        monthly: 15,
    },
];

export function getAffiliateCategory(category: string) {
    return affiliateLinks[category as keyof typeof affiliateLinks];
}

export function getAllAffiliateLinks() {
    return Object.values(affiliateLinks).flatMap(cat => cat.links);
}

export function getSponsoredTools() {
    return sponsoredTools;
}
