const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'src', 'components', 'tools');
const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.tsx'));

const classReplacements = [
  { from: /bg-white/g, to: 'bg-white dark:bg-gray-800' },
  { from: /bg-gray-50/g, to: 'bg-gray-50 dark:bg-gray-900' },
  { from: /border-gray-300/g, to: 'border-gray-300 dark:border-gray-600' },
  { from: /text-gray-500/g, to: 'text-gray-500 dark:text-gray-400' },
  { from: /text-gray-600/g, to: 'text-gray-600 dark:text-gray-400' },
  { from: /text-gray-800/g, to: 'text-gray-800 dark:text-gray-200' },
  { from: /text-gray-900/g, to: 'text-gray-900 dark:text-gray-100' },
  { from: /bg-gray-800 dark:bg-gray-800/g, to: 'bg-white dark:bg-gray-800' }, // fix double append
  { from: /bg-white dark:bg-gray-800 dark:bg-gray-800/g, to: 'bg-white dark:bg-gray-800' },
  { from: /className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y"/g, to: 'className="w-full h-32 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:outline-none resize-y bg-white dark:bg-gray-800"' },
  { from: /className="w-full p-3 border-2 border-gray-300 rounded-lg"/g, to: 'className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"' },
  { from: /className="w-full p-4 border-2 border-gray-300 rounded-lg h-64"/g, to: 'className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg h-64 bg-white dark:bg-gray-800"' },
];

for (const file of files) {
  let filepath = path.join(toolsDir, file);
  let content = fs.readFileSync(filepath, 'utf-8');

  // Generic class replacements for common Tailwind classes missing dark mode
  content = content.replace(/className="([^"]+)"/g, (match, classes) => {
    let newClasses = classes;
    if (newClasses.includes('bg-white') && !newClasses.includes('dark:bg-gray-800')) newClasses += ' dark:bg-gray-800';
    if (newClasses.includes('bg-gray-50') && !newClasses.includes('dark:bg-gray-900')) newClasses += ' dark:bg-gray-900';
    if (newClasses.includes('border-gray-300') && !newClasses.includes('dark:border-gray-700')) newClasses += ' dark:border-gray-700';
    if (newClasses.includes('text-gray-500') && !newClasses.includes('dark:text-gray-400')) newClasses += ' dark:text-gray-400';
    if (newClasses.includes('text-gray-600') && !newClasses.includes('dark:text-gray-300')) newClasses += ' dark:text-gray-300';
    return `className="${newClasses}"`;
  });

  // Inject Image Compressor functionality
  if (file === 'ImageCompressor.tsx') {
    content = `'use client';
import { useState } from 'react';

export default function ImageCompressor() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [quality, setQuality] = useState(0.8);
    const [originalSize, setOriginalSize] = useState(0);
    const [compressedSize, setCompressedSize] = useState(0);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setOriginalSize(file.size);
            const reader = new FileReader();
            reader.onload = () => setOriginalImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const compress = () => {
        if (!originalImage) return;
        const img = new Image();
        img.src = originalImage;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                setCompressedImage(dataUrl);
                // estimate string size
                setCompressedSize(Math.round(dataUrl.length * 3 / 4));
            }
        };
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleFile} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
            </div>
            {originalImage && (
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Quality ({Math.round(quality * 100)}%)</label>
                    <input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full" />
                    <button onClick={compress} className="w-full mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                        Compress Image
                    </button>
                </div>
            )}
            {compressedImage && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                    <p className="mb-2">Original Size: {(originalSize / 1024).toFixed(2)} KB | Compressed Size: {(compressedSize / 1024).toFixed(2)} KB</p>
                    <img src={compressedImage} alt="Compressed" className="max-w-full h-auto mx-auto mb-4" />
                    <a href={compressedImage} download="compressed.jpg" className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Download Compressed Image
                    </a>
                </div>
            )}
        </div>
    );
}`;
  }

  // Inject Image Converter functionality
  if (file === 'ImageConverter.tsx') {
    content = `'use client';
import { useState } from 'react';

export default function ImageConverter() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [convertedImage, setConvertedImage] = useState<string | null>(null);
    const [format, setFormat] = useState('image/png');

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setOriginalImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const convert = () => {
        if (!originalImage) return;
        const img = new Image();
        img.src = originalImage;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                setConvertedImage(canvas.toDataURL(format, 1.0));
            }
        };
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleFile} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Convert To</label>
                <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                    <option value="image/jpeg">JPG</option>
                    <option value="image/png">PNG</option>
                    <option value="image/webp">WEBP</option>
                </select>
            </div>
            <button onClick={convert} disabled={!originalImage} className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold disabled:opacity-50">
                Convert Image
            </button>
            {convertedImage ? (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                    <img src={convertedImage} alt="Converted" className="max-w-full h-auto mx-auto mb-4" />
                    <a href={convertedImage} download={\`converted.\${format.split('/')[1]}\`} className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Download Image
                    </a>
                </div>
            ) : null}
        </div>
    );
}`;
  }

  if (file === 'ImageResizer.tsx') {
    content = `'use client';
import { useState, useRef } from 'react';

export default function ImageResizer() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [resizedImage, setResizedImage] = useState<string | null>(null);
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setOriginalImage(reader.result as string);
                const img = new Image();
                img.src = reader.result as string;
                img.onload = () => {
                    setWidth(img.width);
                    setHeight(img.height);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const resize = () => {
        if (!originalImage) return;
        const img = new Image();
        img.src = originalImage;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                setResizedImage(canvas.toDataURL('image/png'));
            }
        };
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleFile} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-semibold mb-2">Width (px)</label>
                    <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Height (px)</label>
                    <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
                </div>
            </div>
            <button onClick={resize} disabled={!originalImage} className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold disabled:opacity-50">
                Resize Image
            </button>
            {resizedImage && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                    <img src={resizedImage} alt="Resized" className="max-w-full h-auto mx-auto mb-4" />
                    <a href={resizedImage} download="resized.png" className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Download Image
                    </a>
                </div>
            )}
        </div>
    );
}`;
  }

  if (file === 'ImageCropper.tsx') {
    content = `'use client';
import { useState } from 'react';

export default function ImageCropper() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setOriginalImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const cropToSquareCenter = () => {
        if (!originalImage) return;
        const img = new Image();
        img.src = originalImage;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const size = Math.min(img.width, img.height);
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const x = (img.width - size) / 2;
                const y = (img.height - size) / 2;
                ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
                setCroppedImage(canvas.toDataURL('image/png'));
            }
        };
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" onChange={handleFile} className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800" />
            </div>
            <button onClick={cropToSquareCenter} disabled={!originalImage} className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold disabled:opacity-50">
                Crop Center Square
            </button>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                Crop tool currently automatically crops out the center square of your image.
            </div>
            {croppedImage && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center">
                    <img src={croppedImage} alt="Cropped" className="max-w-full h-auto mx-auto mb-4 border border-gray-300 dark:border-gray-700" />
                    <a href={croppedImage} download="cropped.png" className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Download Image
                    </a>
                </div>
            )}
        </div>
    );
}`;
  }

  // Rewrite tool specific logic for Base64Tool, CaseConverter, etc. to make sure textareas have dark mode styles
  content = content.replace(/border-gray-300"/g, 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"');
  
  if (file === "Base64Tool.tsx" || file === "HashGenerator.tsx" || file === "QRGenerator.tsx" || file === "TextDiff.tsx" || file === "CaseConverter.tsx" || file === "JsonFormatter.tsx" || file === "LoremGenerator.tsx" || file === "WordCounter.tsx" || file === "TextToAscii.tsx" || file === "UrlEncoder.tsx") {
    // just double check textareas
    content = content.replace(/<textarea([^>]+)>/g, (m, attrs) => {
        if (!attrs.includes("dark:bg-gray-800")) {
            return `<textarea${attrs.replace('className="', 'className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ')}>`;
        }
        return m;
    });
    content = content.replace(/<input([^>]+)>/g, (m, attrs) => {
        if (!attrs.includes("dark:bg-gray-800") && attrs.includes('type="text"')) {
            return `<input${attrs.replace('className="', 'className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ')}>`;
        }
        return m;
    });
  }

  fs.writeFileSync(filepath, content);
}

// now let's write dark mode class fix to src/app/tools/[slug]/page.tsx
const toolPagePath = path.join(__dirname, 'src', 'app', 'tools', '[slug]', 'page.tsx');
let toolPage = fs.readFileSync(toolPagePath, 'utf-8');
toolPage = toolPage.replace(/bg-white/g, 'bg-white dark:bg-gray-800');
toolPage = toolPage.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-gray-900');
toolPage = toolPage.replace(/border-gray-100/g, 'border-gray-100 dark:border-gray-700');
toolPage = toolPage.replace(/text-gray-900/g, 'text-gray-900 dark:text-gray-100');
toolPage = toolPage.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-400');
toolPage = toolPage.replace(/<div className="prose max-w-none">/, '<div className="prose dark:prose-invert max-w-none">');

fs.writeFileSync(toolPagePath, toolPage);

// write to tools page page.tsx
const toolsIndexPagePath = path.join(__dirname, 'src', 'app', 'tools', 'page.tsx');
if (fs.existsSync(toolsIndexPagePath)) {
  let toolsIndexPage = fs.readFileSync(toolsIndexPagePath, 'utf-8');
  toolsIndexPage = toolsIndexPage.replace(/bg-white/g, 'bg-white dark:bg-gray-800');
  toolsIndexPage = toolsIndexPage.replace(/text-gray-900/g, 'text-gray-900 dark:text-gray-100');
  toolsIndexPage = toolsIndexPage.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-400');
  fs.writeFileSync(toolsIndexPagePath, toolsIndexPage);
}
