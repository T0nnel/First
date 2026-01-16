'use client';

import { useState } from 'react';

export default function WordCounter() {
    const [text, setText] = useState('');

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words.length / 200);

    return (
        <div>
            <textarea
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y"
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <StatCard label="Words" value={words.length} />
                <StatCard label="Characters" value={characters} />
                <StatCard label="Sentences" value={sentences} />
                <StatCard label="Paragraphs" value={paragraphs} />
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <strong>Reading Time:</strong> {readingTime} min
            </div>
        </div>
    );
}

function StatCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary">{value}</div>
            <div className="text-gray-600 text-sm mt-1">{label}</div>
        </div>
    );
}
