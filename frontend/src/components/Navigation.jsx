import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ links, activeLink }) {
  return (
    <div className="flex  flex-wrap  gap-10 text-2xl font-customFont">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={activeLink === index ? "text-green-300 font-bold" : "text-white"}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
