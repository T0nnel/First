'use client';

export default function ImageCropper() {
    return (
        <div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Image</label>
                <input type="file" accept="image/*" className="w-full p-3 border-2 border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-2">Aspect Ratio</label>
                <select className="w-full p-3 border-2 border-gray-300 rounded-lg">
                    <option>Free</option>
                    <option>1:1 (Square)</option>
                    <option>16:9 (Landscape)</option>
                    <option>9:16 (Portrait)</option>
                    <option>4:3</option>
                </select>
            </div>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-semibold">
                Crop Image
            </button>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                Upload an image to crop
            </div>
        </div>
    );
}
