'use client';
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
}