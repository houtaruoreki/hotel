import React, { useState } from "react";
import jamesProfile from "/Images/unsplash_OhKElOkQ3RE.png";
import gregProfile from "/Images/unsplash_WMD64tMfc4k.svg";
import trevorProfile from "/Images/unsplash_6anudmpILw4.svg";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [rating, setRating] = useState(0); // State to hold the rating

  // Function to handle clicking on a star to set the rating
  const handleRating = (value) => {
    setRating(value);
  };

  // Sample user profiles data
  const userProfiles = [
    {
      id: 1,
      name: "James Pattinson",
      photoUrl: jamesProfile,
      rating: 4,
      impression:
        "გამორჩეული სტუმართმოყვარეობა: ”ჩემი ყოფნა ამ სასტუმრო სახლში იყო აბსოლუტურად სასიამოვნო! პერსონალი მაღლა დგას ჩემი კომფორტისა და კმაყოფილების უზრუნველსაყოფად.“",
    },
    {
      id: 2,
      name: "Greg Stuart",
      photoUrl: gregProfile,
      rating: 5,
      impression:
        "ლამაზი საცხოვრებელი: ”საცხოვრებლის ყველა ასპექტში დეტალებისადმი ყურადღების მიქცევამ ჩემი დასვენება დასამახსოვრებელი გახადა.“",
    },
    {
      id: 3,
      name: "Trevor Mitchell",
      photoUrl: trevorProfile,
      rating: 3,
      impression:
        "უაღრესად რეკომენდირებული: ”მე გირჩევთ ამ სასტუმრო სახლს ნებისმიერს, ვინც ამ ტერიტორიას სტუმრობს. მდებარეობა იდეალურია, კეთილმოწყობა უმაღლესი დონის, პერსონალი კი წარმოუდგენლად მეგობრული და კეთილგანწყობილია. “",
    },
  ];

  return (
    <motion.div className="bg-mwvane p-8"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}>
      <h1 className="text-2xl font-bold text-center mt-16 text-white">
        ჩვენს შესახებ
      </h1>

      {/* Our Story */}
      <div className="flex flex-col gap-20">
        <div className="mt-8 flex justify-center items-center">
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/600x500"
              alt="Service Image"
            />
          </div>
          <div className="m-4">
            <h2 className="text-3xl font-bold text-white">ჩვენი ისტორია</h2>
            <p className="text-xl font-normal text-[#D9D9D9] mt-2">
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

        <div className="mt-8 flex justify-center items-center">
          <div className="m-4">
            <h2 className="text-3xl font-bold text-white">მისია და ხედვა</h2>
            <p className="text-xl font-normal text-[#D9D9D9] mt-2">
              we believe in providing more than just accommodation; we offer an
              immersive experience that celebrates the rich culture and natural
              wonders of Georgia's Guria region. Our journey began with a vision
              to create a haven where guests could escape the hustle and bustle
              of city life and reconnect with the simplicity and beauty of rural
              living.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/600x500"
              alt="Service Image"
            />
          </div>
        </div>

        {/* Team Members/Founder */}
        <div className="mt-8 flex justify-center items-center">
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/600x500"
              alt="Service Image"
            />
          </div>
          <div className="m-4">
            <h2 className="text-3xl font-bold text-white">
              გუნდის წევრები/დამფუძნებლები
            </h2>
            <p className="text-xl font-normal text-[#D9D9D9] mt-2">
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
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-white mt-20">
          მომხმარებელთა შთაბეჭდილებები
        </h2>
        <div className="flex mt-20 gap-16">
          {userProfiles.map((profile) => (
            <div
              key={profile.id}
              className="border-2 border-black border-solid text-center flex flex-col items-center justify-center rounded-lg bg-white py-9 w-[422px] px-6"
            >
              <div className="flex items-center text-center mb-2">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="rounded-full "
                />
              </div>
              <p className="font-semibold">{profile.name}</p>

              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`text-2xl mr-1 ${
                      value <= profile.rating ? "text-black" : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>{profile.impression}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
