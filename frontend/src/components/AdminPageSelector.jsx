import React, { useState } from "react";
import "./AdminPageSelector.css";
import line from "../assets/line.png";
import heart from "../assets/heart.png";
import adminhome from "../assets/adminhome.png";
import watch from "../assets/watch.png";
import speedometer from "../assets/speedometer.png";
import play from "../assets/play.png";
import search from "../assets/search.png";
import HomeImageButton from "./HomeImageButton";

export default function AdminPageSelector() {
  const [activeLink, setActiveLink] = useState(null);
  const handleRedirect = (path, index) => {
    setActiveLink(index);
    window.location.href = path;
  };

  return (
    <div className="flex ">
      <div className="grid gap-4 border-black  px-9  relative ">
        <div className="left-0 right-0 flex justify-center items-center ">
          <HomeImageButton></HomeImageButton>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="ძებნა"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md mb-4 relative"
          />
          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 bottom-3 top-5.5 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="relative">
          <button
            className={`w-full relative link-button ${
              activeLink === 0 ? "active" : ""
            }`}
            onClick={() => handleRedirect("/AdminDashboard", 0)}
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }} 
          >
            ინფორმაციის დაფა
          </button>
          <img
            src={speedometer}
            alt="Search icon"
            onClick={() => handleRedirect("/AdminDashboard", 0)}
            className="absolute left-3 bottom-3 top-6 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            style={{ width: "1.5rem", height: "1.4rem" }}
          />

          <img
            src={play}
            alt="play"
            onClick={() => handleRedirect("/AdminDashboard", 0)}
            className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>



        <div className="relative">
          <button
            className={`w-full relative link-button ${
              activeLink === 1 ? "active" : ""
            }`}
            onClick={() => handleRedirect("/AdminReservation", 1)}
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }} 
          >
            დაჯავშნა
          </button>
          <img
            src={watch}
            alt="Search icon"
            onClick={() => handleRedirect("/AdminReservation", 1)}
            className="absolute left-3 bottom-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />

          <img
            src={play}
            alt="play"
            onClick={() => handleRedirect("/AdminReservation", 1)}
            className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>


        <div className="relative">
          <button
            className={`w-full relative link-button ${
              activeLink === 2 ? "active" : ""
            }`}
            onClick={() => handleRedirect("/AdminManagerooms", 2)}
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }} 
          >
            ოთახების მართვა
          </button>
          <img
            src={adminhome}
            alt="Search icon"
            onClick={() => handleRedirect("/AdminManagerooms", 2)}
            className="absolute left-3 bottom-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />

          <img
            src={play}
            alt="play"
            onClick={() => handleRedirect("/AdminManagerooms", 2)}
            className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>



        <div className="relative">
          <button
            className={`w-full relative link-button ${
              activeLink === 3 ? "active" : ""
            }`}
            onClick={() => handleRedirect("/AdminReviews", 3)}
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }} 
          >
            სტუმრების შეფასება
          </button>
          <img
            src={heart}
            alt="Search icon"
            className="absolute left-3 bottom-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={() => handleRedirect("/AdminReviews", 3)}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />

          <img
            src={play}
            alt="play"
            className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={() => handleRedirect("/AdminReviews", 3)}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>       

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
