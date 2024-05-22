import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/Images/image 7.png";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";
import Navigation from "./Navigation";

export default function Header() {
  const location = useLocation();
  const id = location.pathname.replace("/", "");

  const headerLinks = [
    { to: "/", label: "მთავარი" },
    { to: "/AboutUs", label: "ჩვენ შესახებ" },
    { to: "/Rooms", label: "ოთახები" },
    { to: "/Reservation", label: "დაჯავშნა" },
    { to: "/Service", label: "სერვისი" },
    { to: "/Gallery", label: "გალერეა" },
    { to: "/ContactUs", label: "კონტაქტი" },
  ];

  return (
    <header className="flex items-center px-8 justify-between bg-mwvane w-full">
      <img src={Logo} alt="logo" className="w-[12%]" />
      <Navigation
        links={headerLinks}
        activeLink={
          id === "" ? 0 : headerLinks.findIndex((link) => link.to === "/" + id)
        }
      />
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
