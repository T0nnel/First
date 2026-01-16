// Tool metadata for SEO and routing
export const toolsData = {
    'image-compressor': {
        title: 'Free Image Compressor Online - Reduce File Size',
        description: 'Compress images without losing quality. Reduce JPG, PNG, WEBP file sizes by up to 90%. Fast, free, and works offline in your browser.',
        keywords: 'image compressor, compress image, reduce image size, optimize images, jpg compressor, png compressor',
        icon: '📦',
        category: 'image',
    },
    'word-counter': {
        title: 'Word Counter - Count Words, Characters & Sentences Online Free',
        description: 'Count words, characters, sentences, and paragraphs instantly. Get reading time estimates. Perfect for writers, students, and content creators.',
        keywords: 'word counter, character counter, word count tool, text counter, sentence counter',
        icon: '🔢',
        category: 'text',
    },
    'json-formatter': {
        title: 'JSON Formatter & Validator - Format, Validate, Minify JSON Online',
        description: 'Format, validate, and minify JSON data instantly. Free online JSON formatter with syntax highlighting. Works offline.',
        keywords: 'json formatter, json validator, json pretty print, minify json, json beautifier',
        icon: '{ }',
        category: 'developer',
    },
    'qr-generator': {
        title: 'QR Code Generator - Create QR Codes Free Online',
        description: 'Generate QR codes instantly for URLs, text, WiFi, vCards, and more. Free, fast, and customizable QR code creator.',
        keywords: 'qr code generator, create qr code, qr code maker, free qr generator',
        icon: '⬛',
        category: 'developer',
    },
    'case-converter': {
        title: 'Case Converter - UPPERCASE, lowercase, Title Case Online Tool',
        description: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Fast and free text case converter.',
        keywords: 'case converter, uppercase, lowercase, title case, text converter',
        icon: '🔤',
        category: 'text',
    },
    'base64': {
        title: 'Base64 Encoder/Decoder - Encode & Decode Base64 Online',
        description: 'Encode and decode Base64 strings instantly. Free online Base64 encoder and decoder tool.',
        keywords: 'base64 encoder, base64 decoder, encode base64, decode base64',
        icon: '🔐',
        category: 'developer',
    },
    'color-picker': {
        title: 'Color Picker - HEX, RGB, HSL Color Converter Online',
        description: 'Pick colors and convert between HEX, RGB, and HSL formats. Free online color picker and converter tool.',
        keywords: 'color picker, hex to rgb, color converter, rgb to hex, hsl converter',
        icon: '🎨',
        category: 'developer',
    },
    'lorem-generator': {
        title: 'Lorem Ipsum Generator - Placeholder Text Generator Online',
        description: 'Generate Lorem Ipsum placeholder text instantly. Customizable paragraph count. Perfect for designers and developers.',
        keywords: 'lorem ipsum generator, placeholder text, dummy text, lorem ipsum',
        icon: '📜',
        category: 'text',
    },
};

export type ToolSlug = keyof typeof toolsData;

export function getAllToolSlugs(): ToolSlug[] {
    return Object.keys(toolsData) as ToolSlug[];
}

export function getToolData(slug: string) {
    return toolsData[slug as ToolSlug];
}
