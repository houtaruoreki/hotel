import React, { useState } from "react";

export default function AdminPageSelector() {
  const [activeLink, setActiveLink] = useState(0); // Default index is 0

  const handleLinkClick = (index) => {
    setActiveLink(index);
    // Handle other logic here if needed
  };

  return (
    <div className="flex items-start">
      <div className="w-400 border grid gap-4 border-black p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            activeLink === 0 && "bg-blue-600"
          }`}
          onClick={() => {
            handleLinkClick(0);
          }}
        >
          ინფორმაციის დაფა
        </button>

        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            activeLink === 1 && "bg-blue-600"
          }`}
          onClick={() => {
            handleLinkClick(1);
          }}
        >
          დაჯავშნა
        </button>

        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            activeLink === 2 && "bg-blue-600"
          }`}
          onClick={() => {
            handleLinkClick(2);
          }}
        >
          ოთახების მართვა
        </button>

        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            activeLink === 3 && "bg-blue-600"
          }`}
          onClick={() => {
            handleLinkClick(3);
          }}
        >
          სტუმრების შეფასება
        </button>
      </div>
    </div>
  );
}
