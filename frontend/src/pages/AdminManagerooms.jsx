import React from "react";
import AdminPageSelector from "../components/AdminPageSelector";

export default function AdminManagerooms() {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-1/4 p-4">
        <AdminPageSelector />
      </div>

      {/* Right side */}
      <div className="flex flex-col border">
      <div className="mt-[80px]"></div>

        {/* Header with search bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">ოთახების მართვა</h1>
          <input
            type="text"
            placeholder="მოძებნე ოთახის ნომრით მაგ:001"
            className="px-3 py-2 border border-gray-300 rounded-md w-1/4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-[85px]"></div>

        {/* Buttons section */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-4">
            <button className="round-button bg-blue-500 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-md">
              ყველა ოთახი
            </button>
            <button className="round-button bg-green-500 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-md">
              თავისუფალი
            </button>
            <button className="round-button bg-yellow-500 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-md">
              დაკავებული
            </button>
            <button className="round-button bg-red-500 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-md">
              დაჯავშნილი
            </button>
            <button className="round-button bg-purple-500 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-md">
              უცნობია
            </button>

            <button className="green-button bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              ოთახის დამატება
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
