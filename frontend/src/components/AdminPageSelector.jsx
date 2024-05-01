import React, { useState } from "react";
import "./AdminPageSelector.css";
import line from "../assets/line.png";
import HomeImageButton from "./HomeImageButton";

export default function AdminPageSelector() {
  const [activeLink, setActiveLink] = useState(null);
  const handleRedirect = (path, index) => {
    setActiveLink(index);
    window.location.href = path;
  };

  return (
    <div className="flex">
      <div className="grid gap-4 border-black p-9 relative">
        <div className="left-0 right-0 flex justify-center items-center ">
          <HomeImageButton></HomeImageButton>
        </div>
        <input
          type="text"
          placeholder="ძებნა"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          className={`link-button ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleRedirect("/AdminDashboard", 0)}
        >
          ინფორმაციის დაფა
        </button>
        <button
          className={`link-button ${activeLink === 1 ? "active" : ""}`}
          onClick={() => handleRedirect("/AdminReservation", 1)}
        >
          დაჯავშნა
        </button>
        <button
          className={`link-button ${activeLink === 2 ? "active" : ""}`}
          onClick={() => handleRedirect("/AdminManagerooms", 2)}
        >
          ოთახების მართვა
        </button>
        <button
          className={`link-button ${activeLink === 3 ? "active" : ""}`}
          onClick={() => handleRedirect("/AdminReviews", 3)}
        >
          სტუმრების შეფასება
        </button>
        <img
          src={line}
          alt="Line"
          className="absolute right-0 -bottom-1/2"
          style={{ zIndex: -1 }}
        />
      </div>
    </div>
  );
}
