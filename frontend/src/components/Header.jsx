import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Logo from "/Images/image 7.png";
import { Link, useLocation } from "react-router-dom";
=======
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
>>>>>>> main
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";
import HomeImageButton from "./HomeImageButton";

export default function Header() {
<<<<<<< HEAD
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
=======
  const [activeLink, setActiveLink] = useState(0); // Default index is 0
  const location = useLocation(); // Get the current location using useLocation
>>>>>>> main

  useEffect(() => {
    // Function to check the current route and set the active link
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
<<<<<<< HEAD
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
=======
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
>>>>>>> main
        >
          კონტაქტი
        </button>
      </div>
      <div className="flex">
<<<<<<< HEAD
        <Link
          to={"/register"}
          onClick={() => handleLinkClick(7)}
          className={getLinkClassName(7)}
=======
        <button
          onClick={() => handleRedirect("/Register", 7)}
          className={activeLink === 7 ? "text-red-500" : "text-black"}
>>>>>>> main
        >
          <img src={userIcon} alt="user icon" className="ml-8" />
        </button>
        <img src={georgiaIcon} alt="georgia icon" className="ml-7" />
        <img src={arrowIcon} alt="arrow icon" />
      </div>
    </header>
  );
}
