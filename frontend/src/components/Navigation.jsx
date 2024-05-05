import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ links, activeLink }) {
  return (
    <div className="flex  flex-wrap  gap-[35px] px-[20px] text-[16px]">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={activeLink === index ? "text-green-500" : "text-black"}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
