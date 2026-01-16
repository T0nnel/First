'use client';

import { useState } from 'react';

export default function UrlEncoder() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const encode = () => {
        setOutput(encodeURIComponent(input));
    };

    const decode = () => {
        try {
            setOutput(decodeURIComponent(input));
        } catch {
            setOutput('Error: Invalid URL');
        }
    };

    return (
        <div>
            <textarea
                className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg"
                placeholder="Enter URL or encoded string..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="flex gap-2 mt-4">
                <button onClick={encode} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Encode URL
                </button>
                <button onClick={decode} className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                    Decode URL
                </button>
            </div>

            {output && (
                <pre className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg overflow-x-auto">
                    {output}
                </pre>
            )}
        </div>
    );
}
