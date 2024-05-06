import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import springImage from "/Images/image 8.png";
import autumnImage from "/Images/image 14.png";
import winterImage from "/Images/image 15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideContent = (
    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-left z-10 font-bold ">
      <h1 className="text-3xl mb-4 text-white">
        კეთილი იყოს თქვენი მობრძანება!
      </h1>
      <p className="mb-8 text-white">
        განიცადე დაუვიწყარი მომენტები და აღმოაჩინე შენი სახლი სახლიდან შორს
      </p>
      <Link
        to="/Reservation"
        className="p-[16px] bg-[#e3fde0] text-black rounded-md border border-black hover:bg-mwvane transition duration-300 ease-in-out flex items-center justify-center w-[50%] md:w-[200px]"
      >
        დაჯავშნე ოთახი
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Link>
    </div>
  );

  return (
    <div className="relative overflow-x-hidden">
      <Slider ref={sliderRef} {...settings}>
        <div className="relative">
          <img src={springImage} alt="spring" className="w-full" />
        </div>
        <div className="relative">
          <img src={autumnImage} alt="autumn" className="w-full" />
        </div>
        <div className="relative">
          <img src={winterImage} alt="winter" className="w-full" />
        </div>
      </Slider>
      {slideContent}
      <button
        className="slick-arrow slick-prev"
        style={{ left: 0 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        Previous
      </button>
      <button
        className="slick-arrow slick-next"
        style={{ right: 0 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        Next
      </button>
    </div>
  );
}
