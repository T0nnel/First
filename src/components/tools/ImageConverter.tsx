'use client';

export default function ImageConverter() {
    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Convert To</label>
                <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                    <option>JPG</option>
                    <option>PNG</option>
                    <option>WEBP</option>
                </select>
            </div>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Convert Image
            </button>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                Upload an image to convert
            </div>
        </div>
    );
}
