'use client';

import { useState } from 'react';

export default function TextToAscii() {
    const [text, setText] = useState('');
    const [output, setOutput] = useState('');

    const generate = () => {
        // Simple ASCII art (you can enhance this later)
        const result = text.split('span').map(char => {
            return char.toUpperCase() + '\n';
        }).join('');
        setOutput(result);
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Enter Text</label>
                <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-300 rounded-lg"
                    placeholder="Enter text..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={20}
                />
            </div>
            <button
                onClick={generate}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Generate ASCII Art
            </button>
            {output && (
                <pre className="mt-6 p-4 bg-gray-900 text-green-400 rounded-lg overflow-x-auto font-mono">
                    {output}
                </pre>
            )}
        </div>
    );
}
