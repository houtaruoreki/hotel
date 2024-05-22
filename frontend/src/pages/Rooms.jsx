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
    <motion.div
      className="bg-white px-10"
    >
      <div className="text-center mb-[5%]">
        <h2 className="text-mwvane text-2xl font-bold pt-20">
          ოთახები
        </h2>
        <p className="text-black mt-14 text-center text-xl font-light">
          დატკბით დასვენებით და სტუმართმოყვარეობით ჩვენს ელეგანტურ ოთახებში.
          ლამაზი ხედებითა და პრემიუმ კეთილმოწყობით, თქვენი დასვენება იქნება
          არაჩვეულებრივი გამოცდილება
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4  items-center mb-4 max-w-screen">
        <div className="flex flex-grow mr-4 mb-2">
          
          {/* <div  className="flex flex-col"> */}
            {/* <label htmlFor="entry-date" className="date-label">შესვლის თარიღი</label> */}
          <input
            className="w-full text-black border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Date"
            type="date"
           
            
          />
          {/* </div> */}
        </div>
        <div className="flex flex-grow mr-4 mb-2">
        {/* <div  className="flex flex-col"> */}
          {/* <label htmlFor="checkout-date" className="date-label">გამოსვლის თარიღი</label> */}
          <input
            className="w-full text-black border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="date"
            id="checkout-date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          {/* </div> */}
        </div>
        <div className="flex flex-grow mr-4 mb-2">
          {/* <label htmlFor="guests-count" className="date-label">სტუმრების რაოდენობა</label> */}
          <input
            className="w-full text-black border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="guests-count"
            placeholder="სტუმრების რაოდენობა"
            value={guestsCount}
            onChange={(e) => setGuestsCount(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border border-gray-800 px-20 py-4 bg-buttonColor font-bold text-black rounded-md hover:bg-mwvane transition duration-300 ease-in-out"
        >
          შეამოწმე
        </button>
      </form>

      {/* Rooms section */}
      <RoomsList handleButtonClick={handleButtonClick} />

      {/* Render RoomDetails component if selectedRoomId is not null */}
      {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
    </motion.div>
  );
}
