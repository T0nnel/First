'use client';

export default function ImageResizer() {
    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block font-semibold mb-2">Width (px)</label>
                    <input type="number" placeholder="800" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label className="block font-semibold mb-2">Height (px)</label>
                    <input type="number" placeholder="600" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
                </div>
            </div>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Resize Image
            </button>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                Upload an image to resize
            </div>
        </div>
    );
}
