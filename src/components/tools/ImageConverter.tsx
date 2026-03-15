'use client';
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
                    <a href={convertedImage} download={`converted.${format.split('/')[1]}`} className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Download Image
                    </a>
                </div>
            ) : null}
        </div>
    );
}