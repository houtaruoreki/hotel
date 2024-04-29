import React, { useState } from "react";
import image8 from "../assets/image8.png";

export default function HomeImageButton() {
  const [activeLink, setActiveLink] = useState(null);

  const handleRedirect = (path, index) => {
    setActiveLink(index);
    window.location.href = path;
  };

  return (
    <button
      className={`link-button ${activeLink === 0 ? "active" : ""}`}
      onClick={() => handleRedirect("/", 0)}
      style={{ border: "none", outline: "none", background: "transparent" }}
    >
      <img src={image8} alt="Icon" className="" />
    </button>
  );
}
