import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";
import HomeImageButton from "./HomeImageButton";

export default function Header() {
  const [activeLink, setActiveLink] = useState(0); 
  const location = useLocation(); 

  useEffect(() => {
    const checkActiveLink = () => {
      switch (location.pathname) {
        case "/AboutUs":
          setActiveLink(1);
          break;
        case "/Rooms":
          setActiveLink(2);
          break;
        case "/Reservation":
          setActiveLink(3);
          break;
        case "/Service":
          setActiveLink(4);
          break;
        case "/Gallery":
          setActiveLink(5);
          break;
        case "/ContactUs":
          setActiveLink(6);
          break;
        case "/Register":
          setActiveLink(7);
          break;
        default:
          setActiveLink(0);
          break;
      }
    };

    checkActiveLink(); // Call the function initially and whenever location changes
  }, [location.pathname]);

  const handleRedirect = (path, index) => {
    setActiveLink(index); // Set the active state to the clicked button
    window.location.href = path; // Redirect to the specified path
  };

  return (
    <header className="flex items-center px-16 justify-between bg-[#F2F9F1] w-full">
      <div>
        <HomeImageButton></HomeImageButton>
      </div>
      <div className="flex gap-10 ml-8 text-black">
        <button
          onClick={() => handleRedirect("/", 0)}
          className={activeLink === 0 ? "text-red-500" : "text-black"}
        >
          მთავარი
        </button>
        <button
          onClick={() => handleRedirect("/AboutUs", 1)}
          className={activeLink === 1 ? "text-red-500" : "text-black"}
        >
          ჩვენ შესახებ
        </button>
        <button
          onClick={() => handleRedirect("/Rooms", 2)}
          className={activeLink === 2 ? "text-red-500" : "text-black"}
        >
          ოთახები
        </button>
        <button
          onClick={() => handleRedirect("/Reservation", 3)}
          className={activeLink === 3 ? "text-red-500" : "text-black"}
        >
          დაჯავშნა
        </button>
        <button
          onClick={() => handleRedirect("/Service", 4)}
          className={activeLink === 4 ? "text-red-500" : "text-black"}
        >
          სერვისი
        </button>
        <button
          onClick={() => handleRedirect("/Gallery", 5)}
          className={activeLink === 5 ? "text-red-500" : "text-black"}
        >
          გალერეა
        </button>
        <button
          onClick={() => handleRedirect("/ContactUs", 6)}
          className={activeLink === 6 ? "text-red-500" : "text-black"}
        >
          კონტაქტი
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => handleRedirect("/Register", 7)}
          className={activeLink === 7 ? "text-red-500" : "text-black"}
        >
          <img src={userIcon} alt="user icon" className="ml-8" />
        </button>
        <img src={georgiaIcon} alt="georgia icon" className="ml-7" />
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </header>
  );
}
