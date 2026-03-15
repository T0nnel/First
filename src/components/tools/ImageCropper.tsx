'use client';
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
}