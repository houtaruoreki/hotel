import React, { useState } from "react";
import { motion } from "framer-motion";
import Mapscreen from "/Images/mapscreen.png";
import Mappin from "/Images/mappin.png";
import phone from "/Images/icon-phone.png";
import mail from "/Images/icon-mail.png";
import map from "/Images/icon-map-pin.png";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      surname: "",
      email: "",
      rating: "",
      comment: "",
    });
  
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl flex justify-center bg-foni text-black p-16">
        კონტაქტი
      </h2>

      <div className="flex justify-between bg-foni text-black px-16">
        <div className="max-w-lg">
          <h2 className="text-4xl text-black mb-4">მოგვწერე</h2>
          <p className="text-sm mb-4">
          გამოიყენეთ ეს საკონტაქტო ფორმა feedback-ის გასაზიარებლად და ყველა თქვენს კითხვაზე პასუხის მისაღებად.
          </p>
          <div className="flex gap-2">
            <div> 
          <img src={phone} alt="Map" className="w-[20px] invert"  />
          <img src={mail} alt="Map" className="w-[20px] " />
          <img src={map} alt="Map" className="w-[20px] invert" />
          </div>
          <div className="">
          <p className="text-sm mb-4">+995 599 99 99 99</p>
          <p className="text-sm mb-4">guesthouse@gmail.com</p>
          <p className="text-sm">ჩოხატაური, ჩხოკოურა</p>
          </div>
        </div>
        
        </div>
        <div className="max-w-lg">
          <div className="mb-4">
            <label className="block mb-1">სახელი</label>
            <input
              type="text"
              name="name"
              placeholder="შეიყვანე სახელი"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">გვარი</label>
            <input
              type="text"
              placeholder="შეიყვანე გვარი"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">ელ-ფოსტა</label>
            <input
              type="email"
              placeholder="შეიყვანე ელ-ფოსტა"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">კმაყოფილი ხართ ჩვენი სერვისით?</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">აირჩიეთ შეფასება</option>
              <option value="yes">კი</option>
              <option value="no">არა</option>
              <option value="partially">ნაწილობრივ</option>
            </select>
            <label className="block mb-1">კომენტარი</label>
            <textarea
              name="comment"
              placeholder="აღწერა"
              value={formData.comment}
              onChange={handleChange}
              rows={4}
              className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              className="bg-buttonColor text-black px-6 py-3 font-bold rounded-md hover:bg-mwvane transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              გაგზავნა
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <a
          href="https://maps.app.goo.gl/PMAB4hURfW5wdeH87"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Mapscreen} alt="Map" className="w-full" />
          <img
            src={Mappin}
            alt="Mappin"
            className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ml-14"
          />
        </a>
      </div>
    </motion.div>
  );
}
