// Tool metadata for SEO and routing
export const toolsData = {
    // Already implemented
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

    // New tools to implement
    'image-resizer': {
        title: 'Image Resizer - Resize Images Online Free',
        description: 'Resize images to any dimension instantly. Free online image resizer tool.',
        keywords: 'image resizer, resize image, image dimensions, scale image',
        icon: '📐',
        category: 'image',
    },
    'image-converter': {
        title: 'Image Converter - Convert JPG, PNG, WEBP Online',
        description: 'Convert images between JPG, PNG, and WEBP formats instantly.',
        keywords: 'image converter, jpg to png, png to jpg, webp converter',
        icon: '🔄',
        category: 'image',
    },
    'image-cropper': {
        title: 'Image Cropper - Crop Images Online Free',
        description: 'Crop images perfectly with our free online image cropper.',
        keywords: 'image cropper, crop image, trim image',
        icon: '✂️',
        category: 'image',
    },
    'image-to-base64': {
        title: 'Image to Base64 Converter Online',
        description: 'Convert images to Base64 encoded strings instantly.',
        keywords: 'image to base64, base64 image encoder',
        icon: '🖼️',
        category: 'image',
    },
    'text-diff': {
        title: 'Text Diff Checker - Compare Two Texts Online',
        description: 'Compare two texts and find differences instantly.',
        keywords: 'text diff, compare text, text comparison, diff checker',
        icon: '⚖️',
        category: 'text',
    },
    'text-to-ascii': {
        title: 'Text to ASCII Art Generator Online',
        description: 'Convert text to ASCII art instantly.',
        keywords: 'ascii art generator, text to ascii, ascii converter',
        icon: '🔠',
        category: 'text',
    },
    'url-encoder': {
        title: 'URL Encoder/Decoder Online Tool',
        description: 'Encode and decode URLs instantly.',
        keywords: 'url encoder, url decoder, encode url, decode url',
        icon: '🔗',
        category: 'developer',
    },
    'hash-generator': {
        title: 'Hash Generator - MD5, SHA1, SHA256 Online',
        description: 'Generate MD5, SHA1, and SHA256 hashes instantly.',
        keywords: 'hash generator, md5 generator, sha256, hash calculator',
        icon: '🔑',
        category: 'developer',
    },
};

export type ToolSlug = keyof typeof toolsData;

export function getAllToolSlugs(): ToolSlug[] {
    return Object.keys(toolsData) as ToolSlug[];
}

export function getToolData(slug: string) {
    return toolsData[slug as ToolSlug];
}
