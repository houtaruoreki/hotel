import React from "react";
import AdminPageSelector from "../components/AdminPageSelector";
import MyComponent from "../pages/AdminRoomsList";



export default function AdminManagerooms() {
  return (
    <div className="flex flex-wrap">
      {/* Left side */}
      <div className="w-full md:w-1/4 p-4">
        <AdminPageSelector />
      </div>

      {/* Right side */}
      <div className="w-full md:w-3/4 p-4">
        <div className="">
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
              <button className="round-button border-[#227B5D] border  bg-[#FFFFFF] bg-opacity-50 hover:bg-opacity-75 text-[#000000] px-4 py-2 rounded-3xl">
                ყველა ოთახი
              </button>
              <button className="round-button border-[#2B60BB] border bg-[#E8F1FD] bg-opacity-50 hover:bg-opacity-75 text-[#2B60BB] px-4 py-2 rounded-3xl">
                თავისუფალი
              </button>
              <button className="round-button border-[#F36960] border text-[#F47169] bg-[#FEECEB] bg-opacity-50 hover:bg-opacity-75  px-4 py-2 rounded-3xl">
                დაკავებული
              </button>
              <button className="round-button border-[#41C588] border text-[#41C588] bg-[#E7F8F0] bg-opacity-50 hover:bg-opacity-75  px-4 py-2 rounded-3xl">
                დაჯავშნილი
              </button>
              <button className="round-button border-[#969907] border  bg-[#FFFCBF] bg-opacity-50 hover:bg-opacity-75 text-[#9D9F12] px-4 py-2 rounded-3xl">
                უცნობია
              </button>

              <button className="green-button bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                ოთახის დამატება
              </button>
            </div>

            {/* New table row */}


          <MyComponent></MyComponent>
            </div>
          </div>
      </div>
    </div>
  );
} 
