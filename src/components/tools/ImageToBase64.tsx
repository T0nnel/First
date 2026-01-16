'use client';

import { useState } from 'react';

export default function ImageToBase64() {
    const [output, setOutput] = useState('');

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setOutput(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg"
                />
            </div>
            {output && (
                <>
                    <textarea
                        className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg font-mono text-sm"
                        value={output}
                        readOnly
                    />
                    <button
                        onClick={() => navigator.clipboard.writeText(output)}
                        className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Copy to Clipboard
                    </button>
                </>
            )}
        </div>
    );
}
