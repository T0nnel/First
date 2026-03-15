'use client';
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
}