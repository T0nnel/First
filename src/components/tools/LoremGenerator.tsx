'use client';

import { useState } from 'react';

export default function LoremGenerator() {
    const [paragraphs, setParagraphs] = useState(5);
    const [output, setOutput] = useState('');

    const lorem = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ];

    const generate = () => {
        let result = '';
        for (let i = 0; i < paragraphs; i++) {
            const sentences = Math.floor(Math.random() * 3) + 3;
            let paragraph = '';
            for (let j = 0; j < sentences; j++) {
                paragraph += lorem[Math.floor(Math.random() * lorem.length)] + ' ';
            }
            result += paragraph.trim() + '\n\n';
        }
        setOutput(result);
    };

    const copy = () => {
        navigator.clipboard.writeText(output);
        alert('Copied to clipboard!');
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Number of paragraphs:</label>
                <input
                    type="number"
                    min="1"
                    max="100"
                    value={paragraphs}
                    onChange={(e) => setParagraphs(Number(e.target.value))}
                    className="w-32 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
            </div>

            <div className="flex gap-2">
                <button onClick={generate} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Generate Lorem Ipsum
                </button>
                {output && (
                    <button onClick={copy} className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                        Copy to Clipboard
                    </button>
                )}
            </div>

            {output && (
                <pre className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg whitespace-pre-wrap">
                    {output}
                </pre>
            )}
        </div>
    );
}
