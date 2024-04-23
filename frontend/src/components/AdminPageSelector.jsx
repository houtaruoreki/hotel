import React, { useState } from "react";
import { Link } from "react-router-dom";
import image8 from "../assets/image8.png";
import "./AdminPageSelector.css"; // Import CSS file

export default function AdminPageSelector() {
  const [activeLink, setActiveLink] = useState(null); // Initialize activeLink as null

  const handleLinkClick = (index) => {
    setActiveLink(index); // Set the active state to the clicked button
    // Handle other logic here if needed
  };

  return (
    <div className="flex items-start">
      <div className="w-400 border grid gap-4 border-black p-4">
        <div className="left-0 right-0 flex justify-center items-center z-10 mb-4">
          <img src={image8} alt="Icon" className="w-15 h-15" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <Link
          to="/AdminDashboard"
          className={`link-button ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleLinkClick(0)}
        >
          ინფორმაციის დაფა
        </Link>
        <Link
          to="/AdminManagerooms"
          className={`link-button ${activeLink === 1 ? "active" : ""}`}
          onClick={() => handleLinkClick(1)}
        >
          დაჯავშნა
        </Link>
        <Link
          to="/AdminReservation"
          className={`link-button ${activeLink === 2 ? "active" : ""}`}
          onClick={() => handleLinkClick(2)}
        >
          ოთახების მართვა
        </Link>
        <Link
          to="/AdminReviews"
          className={`link-button ${activeLink === 3 ? "active" : ""}`}
          onClick={() => handleLinkClick(3)}
        >
          სტუმრების შეფასება
        </Link>
      </div>
    </div>
  );
}
