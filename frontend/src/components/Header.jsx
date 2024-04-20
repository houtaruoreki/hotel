import React, { useState } from "react";
import Logo from "/Images/image 7.png";
import { Link } from "react-router-dom";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";

export default function Header() {
  const [activeLink, setActiveLink] = useState(0); // Default index is 0

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header className="flex items-center px-16 justify-between bg-[#F2F9F1] w-full">
      <img src={Logo} alt="logo" className="" />
      <div className="flex gap-10 ml-8 text-black">
        <Link
          to={"/"}
          onClick={() => handleLinkClick(0)}
          className={activeLink === 0 ? "text-red-500" : "text-black"}
        >
          მთავარი
        </Link>
        <Link
          to={"/AboutUs"}
          onClick={() => handleLinkClick(1)}
          className={activeLink === 1 ? "text-red-500" : "text-black"}
        >
          ჩვენ შესახებ
        </Link>
        <Link
          to={"/Rooms"}
          onClick={() => handleLinkClick(2)}
          className={activeLink === 2 ? "text-red-500" : "text-black"}
        >
          ოთახები
        </Link>
        <Link
          to={"/Reservation"}
          onClick={() => handleLinkClick(3)}
          className={activeLink === 3 ? "text-red-500" : "text-black"}
        >
          დაჯავშნა
        </Link>
        <Link
          to={"/Service"}
          onClick={() => handleLinkClick(4)}
          className={activeLink === 4 ? "text-red-500" : "text-black"}
        >
          სერვისი
        </Link>
        <Link
          to={"/Gallery"}
          onClick={() => handleLinkClick(5)}
          className={activeLink === 5 ? "text-red-500" : "text-black"}
        >
          გალერეა
        </Link>
        <Link
          to={"/ContactUs"}
          onClick={() => handleLinkClick(6)}
          className={activeLink === 6 ? "text-red-500" : "text-black"}
        >
          კონტაქტი
        </Link>
      </div>
      <div className="flex">
        <Link>
          <img src={userIcon} alt="user icon" className="ml-8" />
        </Link>

        <img src={georgiaIcon} alt="georgia icon" className="ml-7" />
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </header>
  );
}
