'use client';

import { useState } from 'react';

export default function TextDiff() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-semibold mb-2">Text 1</label>
                    <textarea
                        className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg"
                        placeholder="Enter first text..."
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Text 2</label>
                    <textarea
                        className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg"
                        placeholder="Enter second text..."
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                    />
                </div>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Compare Texts
            </button>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Differences will appear here</p>
            </div>
        </div>
    );
}
