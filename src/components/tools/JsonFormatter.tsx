'use client';

import { useState } from 'react';

export default function JsonFormatter() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const format = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setError('');
        } catch (e: any) {
            setError(e.message);
            setOutput('');
        }
    };

    const minify = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setError('');
        } catch (e: any) {
            setError(e.message);
            setOutput('');
        }
    };

    const validate = () => {
        try {
            JSON.parse(input);
            setOutput('✓ Valid JSON!');
            setError('');
        } catch (e: any) {
            setError('✗ Invalid JSON: ' + e.message);
            setOutput('');
        }
    };

    return (
        <div>
            <textarea
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y font-mono text-sm"
                placeholder='Enter JSON here... e.g. {"name":"John","age":30}'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="flex gap-2 mt-4">
                <button onClick={format} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Format
                </button>
                <button onClick={minify} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Minify
                </button>
                <button onClick={validate} className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
                    Validate
                </button>
            </div>

            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                </div>
            )}

            {output && (
                <pre className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg overflow-x-auto font-mono text-sm">
                    {output}
                </pre>
            )}
        </div>
    );
}
