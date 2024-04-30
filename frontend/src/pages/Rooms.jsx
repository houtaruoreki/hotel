import React, { useState } from "react";
import RoomDetails from "../components/RoomDetails"; 
import RoomsList from "../components/RoomsList"; 
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Rooms() {
  const [selectedRoomId, setSelectedRoomId] = useState(null); 

  const handleButtonClick = (roomId) => {
    setSelectedRoomId(roomId);
    console.log("details is clicked");
  };

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Guests Count:", guestsCount);
  };

  return (
    <div className="wrapper flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-grow bg-mwvane text-white p-10">
        <div className="flex flex-col justify-center items-center h-full mb-1">
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4 max-w-screen mx-auto">
        <select
          className="w-full text-black border border-gray-400 px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 md:mr-4 md:flex-1 md:w-1/4 lg:w-auto focus:outline-none focus:border-blue-500"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        >
          <option value="">შემოსვლის თარიღი</option>
        </select>

        <select
          className="w-full text-black border border-gray-400 px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 md:mr-4 md:flex-1 md:w-1/4 lg:w-auto focus:outline-none focus:border-blue-500"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        >
          <option value="">გასვლის თარიღი</option>
        </select>

        <input
          type="number"
          className="w-full text-black border border-gray-400 px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 md:mr-4 md:flex-1 md:w-1/4 lg:w-auto focus:outline-none focus:border-blue-500"
          placeholder="სტუმრების რაოდენობა"
          value={guestsCount}
          onChange={(e) => setGuestsCount(e.target.value)}
        />

        <button
          type="submit"
          className="flex-1 border border-gray-800 px-4 py-2 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
        >
          შეამოწმე
        </button>
      </div>

      <RoomsList handleButtonClick={handleButtonClick} />

      {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
    </div>
    <Footer></Footer>
    </div>
  );
}
