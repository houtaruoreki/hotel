import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Mapscreen from "/Images/mapscreen.png";
import Mappin from "/Images/mappin.png";
import phoneIcon from "/Images/icon-phone.png";
import mailIcon from "/Images/icon-mail.png";
import mapIcon from "/Images/icon-map-pin.png";
import API_URL from '../config';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    satisfied: "",
    message: "",
  });

  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    email: ""
  });

  useEffect(() => {
    fetch(`${API_URL}/contact/`)
      .then(response => response.json())
      .then(data => {
        const emailData = data.find(item => item.title === "email");
        const phoneData = data.find(item => item.title === "phone");

        setContactInfo({
          mobile: phoneData ? phoneData.description : "",
          email: emailData ? emailData.description : ""
        });
      })
      .catch(error => console.error('Error fetching contact info:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the form data to the server
    fetch(`${API_URL}/message/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`Error ${response.status}: ${err.message}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
        setFormData({
          fullname: "",
          email: "",
          satisfied: "",
          message: "",
        });
      })
      .catch(error => console.error('Error sending form data:', error));
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

      <div className="flex justify-around align-middle bg-foni text-black px-16">
        <div className="max-w-lg">
          <h2 className="text-4xl text-black mb-4">მოგვწერე</h2>
          <p className="text-sm mb-4">
            გამოიყენეთ ეს საკონტაქტო ფორმა feedback-ის გასაზიარებლად და ყველა თქვენს კითხვაზე პასუხის მისაღებად.
          </p>
          <div className="">
            <div className="flex gap-2 align-middle"> 
              <img src={phoneIcon} alt="Phone" className="w-[20px] h-[20px] invert" />
              <p className="text-sm mb-4">{contactInfo.mobile}</p>
            </div>
            <div className="flex gap-2 align-middle">
              <img src={mailIcon} alt="Mail" className="w-[20px] h-[20px]" />
              <p className="text-sm mb-4">{contactInfo.email}</p>
            </div>
            <div className="flex gap-2 align-middle">
              <img src={mapIcon} alt="Map" className="w-[20px] h-[20px] invert" />
              <p className="text-sm">ჩოხატაური, ჩხოკოურა</p>
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <div className="mb-4">
            <label className="block mb-1">სახელი და გვარი</label>
            <input
              type="text"
              name="fullname"
              placeholder="შეიყვანე სახელი და გვარი"
              value={formData.fullname}
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
              name="satisfied"
              value={formData.satisfied}
              onChange={handleChange}
              className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">აირჩიეთ შეფასება</option>
              <option value="კი">კი</option>
              <option value="არა">არა</option>
              <option value="ნაწილობრივ">ნაწილობრივ</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">კომენტარი</label>
            <textarea
              name="message"
              placeholder="აღწერა"
              value={formData.message}
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
          <img src={Mapscreen} alt="Map" className="w-full h-[100vh]" />
          <img
            src={Mappin}
            alt="Mappin"
            className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ml-14 "
          />
        </a>
      </div>
    </motion.div>
  );
}
