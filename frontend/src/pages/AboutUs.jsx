import React, { useState } from "react";
import jamesProfile from "/Images/unsplash_OhKElOkQ3RE.png";
import gregProfile from "/Images/unsplash_WMD64tMfc4k.svg";
import trevorProfile from "/Images/unsplash_6anudmpILw4.svg";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
  const [rating, setRating] = useState(0);

  // Function to handle clicking on a star to set the rating
  const handleRating = (value) => {
    setRating(value);
  };

  const userProfiles = [
    {
      id: 1,
      name: "James Pattinson",
      photoUrl: jamesProfile,
      rating: 4,
      impression:
      "good"
    },
    {
      id: 2,
      name: "Greg Stuart",
      photoUrl: gregProfile,
      rating: 5,
      impression:
      "very good"
    },
    {
      id: 3,
      name: "Trevor Mitchell",
      photoUrl: trevorProfile,
      rating: 3,
      impression:
      "very very good good"
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="bg-foni p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center mt-16 text-mwvane">
        ჩვენს შესახებ
      </h1>

      {/* Our Story */}
      <div className="flex flex-col gap-20">
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1694942595231-7e019ff65c47?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              ჩვენი ისტორია
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2 leading-8">
              we believe in providing more than just accommodation; we offer an
              immersive experience that celebrates the rich culture and natural
              wonders of Georgia's Guria region. Our journey began with a vision
              to create a haven where guests could escape the hustle and bustle
              of city life and reconnect with the simplicity and beauty of rural
              living.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              მისია და ხედვა
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2">
              we believe in providing more than just accommodation; we offer an
              immersive experience that celebrates the rich culture and natural
              wonders of Georgia's Guria region. Our journey began with a vision
              to create a haven where guests could escape the hustle and bustle
              of city life and reconnect with the simplicity and beauty of rural
              living.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1694942587160-3fcfecc29762?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Team Members/Founder */}
        <div className="mt-8 flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1453129901055-284722f098b7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service Image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              გუნდის წევრები/დამფუძნებლები
            </h2>
            <p className="text-lg md:text-lg font-normal text-neutralText mt-2">
              we believe in providing more than just accommodation; we offer an
              immersive experience that celebrates the rich culture and natural
              wonders of Georgia's Guria region. Our journey began with a vision
              to create a haven where guests could escape the hustle and bustle
              of city life and reconnect with the simplicity and beauty of rural
              living.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Impressions */}
      <div className="text-center flex flex-col justify-center items-center mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-mwvane">
          მომხმარებელთა შთაბეჭდილებები
        </h2>
        <Slider {...sliderSettings} className="w-full max-w-9xl mt-10 flex gap-16">
  {userProfiles.map((profile) => (
    <div
      key={profile.id}
      className="border-2 border-solid text-center flex flex-col items-center justify-center rounded-lg bg-white w-20px h-100 p-10"
    >
      <div className="flex items-center text-center mb-4 justify-center">
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="rounded-full w-24 h-24"
        />
      </div>
      <p className="font-semibold text-lg">{profile.name}</p>
      <div className="flex items-center mb-4 justify-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`text-xl mr-1 ${
              value <= profile.rating ? "text-black" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-base text-neutralText">{profile.impression}</p>
    </div>
  ))}
</Slider>

      </div>
    </motion.div>
  );
}
