import React, { useState, useEffect } from "react";
import Logo from "/Images/image 7.png";
import { Link, useLocation } from "react-router-dom";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";

export default function Header() {
  const knownRoutes = [
    "/",
    "/aboutus",
    "/rooms",
    "/reservation",
    "/service",
    "/gallery",
    "/contactus",
    "/register",
    "/admindashboard",
    "/adminmanagerooms",
    "/adminreservation",
    "/adminreviews",
  ];
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(knownRoutes.findIndex(route => route === location.pathname));

  useEffect(() => {
    // Set active link based on current pathname
    const path = location.pathname;
    const activeIndex = knownRoutes.findIndex(route => route === path);
    setActiveLink(activeIndex);
  }, [location.pathname]);



  const getLinkClassName = (index) => {
    return index === activeLink ? "text-buttonText font-extrabold" : "text-black";
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header className="flex items-center px-16 justify-between bg-[#F2F9F1]	  w-full">
      <img src={Logo} alt="logo" className="" />
      <div className="flex gap-10 ml-8">
      <Link
          to={"/"}
          onClick={() => handleLinkClick(0)}
          className={getLinkClassName(0)}
        >
          მთავარი
        </Link>
        <Link
          to={"/aboutus"}
          onClick={() => handleLinkClick(1)}
          className={getLinkClassName(1)}
        >
          ჩვენ შესახებ
        </Link>
        <Link
          to={"/rooms"}
          onClick={() => handleLinkClick(2)}
          className={getLinkClassName(2)}
        >
          ოთახები
        </Link>
        <Link
          to={"/reservation"}
          onClick={() => handleLinkClick(3)}
          className={getLinkClassName(3)}
        >
          დაჯავშნა
        </Link>
        <Link
          to={"/service"}
          onClick={() => handleLinkClick(4)}
          className={getLinkClassName(4)}
        >
          სერვისი
        </Link>
        <Link
          to={"/gallery"}
          onClick={() => handleLinkClick(5)}
          className={getLinkClassName(5)}
        >
          გალერეა
        </Link>
        <Link
          to={"/contactus"}
          onClick={() => handleLinkClick(6)}
          className={getLinkClassName(6)}
        >
          კონტაქტი
        </Link>
      </div>
      <div className="flex">
        <Link
          to={"/register"}
          onClick={() => handleLinkClick(7)}
          className={getLinkClassName(7)}
        >
          <img src={userIcon} alt="user icon" className="ml-8" />
        </Link>
        <img src={georgiaIcon} alt="georgia icon" className="ml-7" />
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </header>
  );
}
