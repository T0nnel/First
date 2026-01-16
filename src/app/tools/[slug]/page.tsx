import { Metadata } from 'next';
import { getToolData, getAllToolSlugs } from '@/lib/tools-data';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import tool components
const ImageCompressor = dynamic(() => import('@/components/tools/ImageCompressor'));
const WordCounter = dynamic(() => import('@/components/tools/WordCounter'));
const JsonFormatter = dynamic(() => import('@/components/tools/JsonFormatter'));
const QRGenerator = dynamic(() => import('@/components/tools/QRGenerator'));
const CaseConverter = dynamic(() => import('@/components/tools/CaseConverter'));
const Base64Tool = dynamic(() => import('@/components/tools/Base64Tool'));
const ColorPicker = dynamic(() => import('@/components/tools/ColorPicker'));
const LoremGenerator = dynamic(() => import('@/components/tools/LoremGenerator'));

// Generate static params for all tools
export async function generateStaticParams() {
    const slugs = getAllToolSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each tool page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const tool = getToolData(params.slug);

    if (!tool) {
        return { title: 'Tool Not Found' };
    }

    return {
        title: tool.title,
        description: tool.description,
        keywords: tool.keywords,
        openGraph: {
            title: tool.title,
            description: tool.description,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: tool.title,
            description: tool.description,
        },
    };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
    const tool = getToolData(params.slug);

    if (!tool) {
        notFound();
    }

    // Map slugs to components
    const toolComponents: Record<string, React.ComponentType> = {
        'image-compressor': ImageCompressor,
        'word-counter': WordCounter,
        'json-formatter': JsonFormatter,
        'qr-generator': QRGenerator,
        'case-converter': CaseConverter,
        'base64': Base64Tool,
        'color-picker': ColorPicker,
        'lorem-generator': LoremGenerator,
    };

    const ToolComponent = toolComponents[params.slug];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-600 mb-6">
                <a href="/" className="hover:text-primary">Home</a> /
                <a href="/tools" className="hover:text-primary ml-1">Tools</a> /
                <span className="ml-1 text-gray-900">{tool.title.split('-')[0]}</span>
            </nav>

            {/* Tool Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-5xl">{tool.icon}</span>
                    {tool.title.split('-')[0]}
                </h1>
                <p className="text-xl text-gray-600">{tool.description}</p>
            </div>

            {/* Ad Space - Top */}
            <div className="mb-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-500 text-sm">Advertisement</p>
            </div>

            {/* Tool Component */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                {ToolComponent ? <ToolComponent /> : <p>Tool component not found</p>}
            </div>

            {/* How to Use */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">How to Use This Tool</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Enter or upload your data in the tool above</li>
                    <li>The tool will process it instantly in your browser</li>
                    <li>Download or copy the result</li>
                    <li>All processing is done locally - your data never leaves your device</li>
                </ol>
            </div>

            {/* Related Tools */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <RelatedToolCard href="/tools/image-resizer" title="Image Resizer" />
                    <RelatedToolCard href="/tools/image-converter" title="Image Converter" />
                    <RelatedToolCard href="/tools/image-cropper" title="Image Cropper" />
                </div>
            </div>

            {/* Ad Space - Bottom */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-500 text-sm">Advertisement</p>
            </div>
        </div>
    );
}

function RelatedToolCard({ href, title }: { href: string; title: string }) {
    return (
        <a href={href} className="block p-4 bg-white border rounded-lg hover:border-primary hover:shadow-md transition">
            <h3 className="font-semibold">{title}</h3>
        </a>
    );
}
