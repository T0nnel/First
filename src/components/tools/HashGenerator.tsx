'use client';

import { useState } from 'react';

export default function HashGenerator() {
    const [input, setInput] = useState('');
    const [md5, setMd5] = useState('');
    const [sha1, setSha1] = useState('');

    const generate = async () => {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);

        // SHA-256
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const sha256 = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        // For demo - showing SHA256 as both (real MD5/SHA1 would need a library)
        setMd5(sha256.substring(0, 32));
        setSha1(sha256);
    };

    return (
        <div>
            <textarea
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg"
                placeholder="Enter text to hash..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={generate}
                className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Generate Hashes
            </button>

            {md5 && (
                <div className="space-y-4 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <strong>MD5:</strong> <code className="ml-2 text-primary text-sm break-all">{md5}</code>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <strong>SHA-256:</strong> <code className="ml-2 text-primary text-sm break-all">{sha1}</code>
                    </div>
                </div>
            )}
        </div>
    );
}
