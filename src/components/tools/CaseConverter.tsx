'use client';

import { useState } from 'react';

export default function CaseConverter() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const convertCase = (type: string) => {
        let result = '';
        switch (type) {
            case 'upper':
                result = input.toUpperCase();
                break;
            case 'lower':
                result = input.toLowerCase();
                break;
            case 'title':
                result = input.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                break;
            case 'sentence':
                result = input.toLowerCase().replace(/(^\w|\.\s+\w)/g, txt => txt.toUpperCase());
                break;
            case 'toggle':
                result = input.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
                break;
        }
        setOutput(result);
    };

    return (
        <div>
            <textarea
                className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y"
                placeholder="Enter text to convert..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="flex flex-wrap gap-2 mt-4">
                <button onClick={() => convertCase('upper')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    UPPERCASE
                </button>
                <button onClick={() => convertCase('lower')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    lowercase
                </button>
                <button onClick={() => convertCase('title')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Title Case
                </button>
                <button onClick={() => convertCase('sentence')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    Sentence case
                </button>
                <button onClick={() => convertCase('toggle')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                    tOGGLE cASE
                </button>
            </div>

            {output && (
                <pre className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg whitespace-pre-wrap">
                    {output}
                </pre>
            )}
        </div>
    );
}
