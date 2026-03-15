'use client';

import { useState } from 'react';

export default function Base64Tool() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const encode = () => {
        try {
            setOutput(btoa(input));
        } catch (e: any) {
            setOutput('Error: ' + e.message);
        }
    };

    const decode = () => {
        try {
            setOutput(atob(input));
        } catch (e: any) {
            setOutput('Error: Invalid Base64 string');
        }
    };

    return (
        <div>
            <textarea
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full h-48 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y font-mono dark:border-gray-700"
                placeholder="Enter text or Base64 string..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="flex gap-2 mt-4">
                <button onClick={encode} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Encode
                </button>
                <button onClick={decode} className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                    Decode
                </button>
            </div>

            {output && (
                <pre className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg overflow-x-auto font-mono text-sm dark:bg-gray-900 dark:border-gray-700">
                    {output}
                </pre>
            )}
        </div>
    );
}
