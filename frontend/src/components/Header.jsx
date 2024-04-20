import React from "react";
import Logo from "/Images/image 7.png";
import { Link } from "react-router-dom";
import userIcon from "/Images/icon-user.svg";
import georgiaIcon from "/Images/GE.svg";
import arrowIcon from "/Images/icon-chevron-down.svg";

export default function Header() {
  return (
    <header className="flex items-center px-16 justify-between bg-[#F2F9F1] w-full">
      <img src={Logo} alt="logo" className="" />
      <div className="flex gap-10 ml-8 text-black text-2xl">
        <Link to={"/"}>მთავარი</Link>
        <Link to={"/AboutUs"}>ჩვენ შესახებ</Link>
        <Link to={"/Rooms"}>ოთახები</Link>
        <Link to={"/Reservation"}>დაჯავშნა</Link>
        <Link to={"/Service"}>სერვისი</Link>
        <Link to={"/Gallery"}>გალერეა</Link>
        <Link to={"/ContactUs"}>კონტაქტი</Link>
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
