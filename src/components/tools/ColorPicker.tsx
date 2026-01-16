'use client';

import { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState('#4F46E5');

    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const hexToHsl = (hex: string) => {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0, s, l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        } else {
            s = 0;
        }

        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };

    return (
        <div>
            <div className="text-center mb-8">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-48 h-48 rounded-lg cursor-pointer border-4 border-gray-300"
                />
            </div>

            <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <strong>HEX:</strong> <code className="ml-2 text-primary">{color.toUpperCase()}</code>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <strong>RGB:</strong> <code className="ml-2 text-primary">{hexToRgb(color)}</code>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <strong>HSL:</strong> <code className="ml-2 text-primary">{hexToHsl(color)}</code>
                </div>
            </div>
        </div>
    );
}
