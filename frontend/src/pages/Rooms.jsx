import React, { useState } from "react";
import RoomDetails from "../components/RoomDetails";
import RoomsList from "../components/RoomsList";
import { motion } from "framer-motion";
import API_URL from '../config';

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
    <motion.div className="bg-white">
      <div className="mx-auto max-w-lg py-12 px-8">
        <h2 className="text-mwvane text-3xl font-bold mb-6">ოთახები</h2>
        <p className="text-[#2D3648] text-lg font-light mb-8">
          დატკბით დასვენებით და სტუმართმოყვარეობით ჩვენს ელეგანტურ ოთახებში.
          ლამაზი ხედებითა და პრემიუმ კეთილმოწყობით, თქვენი დასვენება იქნება
          არაჩვეულებრივი გამოცდილება
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="check-in-date" className="text-sm font-semibold text-gray-600 mb-1">შესვლის თარიღი</label>
            <input
              id="check-in-date"
              type="date"
              className="input-field border-2 border-solid p-2"
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="check-out-date" className="text-sm font-semibold text-gray-600 mb-1">გასვლის თარიღი</label>
            <input
              id="check-out-date"
              type="date"
              className="input-field border-2 border-solid p-2"
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="guests-count" className="text-sm font-semibold text-gray-600 mb-1">სტუმრების რაოდენობა</label>
            <input
              id="guests-count"
              type="number"
              className="input-field border-2 border-solid p-2"
              onChange={(e) => setGuestsCount(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-mwvane text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            შეამოწმე
          </button>
        </form>
        {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
      </div>
      <RoomsList handleButtonClick={handleButtonClick} />
    </motion.div>
  );
}
