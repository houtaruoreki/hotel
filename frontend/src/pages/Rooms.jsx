import React, { useState } from "react";
import RoomDetails from "../components/RoomDetails";
import RoomsList from "../components/RoomsList";
import { motion } from "framer-motion";

export default function Rooms() {
  const [selectedRoomId, setSelectedRoomId] = useState(null); // State to store the ID of the selected room

  // Function to handle button click
  const handleButtonClick = (roomId) => {
    setSelectedRoomId(roomId);
    console.log("details is clicked");
  };

  // State variables for form inputs
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Guests Count:", guestsCount);
  };

  return (
    <motion.div className="bg-white ">
      <div className=" mx-[5%] ">
        <div className="text-center mb-[5%]  ">
          <h2 className="text-mwvane text-2xl font-bold pt-20">ოთახები</h2>
          <p className="text-[#2D3648] mt-14 text-center text-xl font-light">
            დატკბით დასვენებით და სტუმართმოყვარეობით ჩვენს ელეგანტურ ოთახებში.
            ლამაზი ხედებითა და პრემიუმ კეთილმოწყობით, თქვენი დასვენება იქნება
            არაჩვეულებრივი გამოცდილება
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex  justify-between content-center  items-center  "
        >
          <div className="flex  ">
            <div className="pb-5">
              <label>შესვლის თარიღი</label>
              <input
                className="w-full text-black border border-[#C2C2C2] px-10 py-4 rounded-xl focus:outline-none focus:border-blue-500"
                type="date"
                placeholder="შემოსვლის თარიღი"
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="pb-5">
              <label>გასვლის თარიღი</label>
              <input
                className="w-full text-black border border-[#C2C2C2] px-10 py-4  rounded-xl focus:outline-none focus:border-blue-500"
                type="date"
                id="checkout-date"
                placeholder="გასვლის თარიღი"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  ">
            <div className="pb-5">
              <label>გასვლის თარიღი</label>
              <input
                className="w-full text-black border border-[#C2C2C2] px-10 py-4  rounded-xl focus:outline-none focus:border-blue-500"
                type="number"
                id="guests-count"
                placeholder="სტუმრების რაოდენობა"
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
              />
            </div>

            
          </div>
          <div className="">
            <button
              type="submit"
              className=" px-20 py-5 bg-buttonColor font-bold text-xl text-[#003E29] rounded-md hover:bg-mwvane transition duration-300 ease-in-out"
            >
              შეამოწმე
            </button>
          </div>
        </form>

        {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
      </div>
      <RoomsList handleButtonClick={handleButtonClick} />
    </motion.div>
  );
}
