'use client';

import { useState } from 'react';

export default function QRGenerator() {
    const [text, setText] = useState('');
    const [qrUrl, setQrUrl] = useState('');

    const generate = () => {
        if (text) {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
            setQrUrl(url);
        }
    };

    return (
        <div>
            <textarea
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-y"
                placeholder="Enter text or URL to generate QR code..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={generate}
                className="mt-4 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold"
            >
                Generate QR Code
            </button>

            {qrUrl && (
                <div className="mt-8 text-center">
                    <div className="inline-block p-6 bg-white rounded-lg shadow-lg">
                        <img src={qrUrl} alt="QR Code" className="max-w-full" />
                    </div>
                    <p className="mt-4 text-gray-600">Scan with your phone camera</p>
                </div>
            )}
        </div>
    );
}
