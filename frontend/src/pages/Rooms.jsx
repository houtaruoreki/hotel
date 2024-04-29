import React, { useState } from "react";
import RoomDetails from "../components/RoomDetails"; // Import the RoomDetails component
import RoomsList from "../components/RoomsList"; // Import the RoomsList component
import Footer from "../components/Footer";
import Header from "../components/Header";

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
    // You can add further logic here, like sending form data to backend
  };

  return (
    <div> 
      <Header></Header>
    <div className="bg-mwvane text-white p-10">
      <div className="flex flex-col justify-center items-center h-full mb-1">
        {/* Your existing JSX */}
      </div>

      {/* Form section */}
      <div className="flex flex-wrap justify-center items-center mb-4 max-w-screen mx-auto">
        <select
          className="w-full text-black border border-gray-400 px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 md:mr-4 md:flex-1 md:w-1/4 lg:w-auto focus:outline-none focus:border-blue-500"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        >
          <option value="">შემოსვლის თარიღი</option>
          {/* Add options dynamically if needed */}
        </select>

        <select
          className="w-full text-black border border-gray-400 px-4 py-2 rounded-md mr-2 mb-2 md:mb-0 md:mr-4 md:flex-1 md:w-1/4 lg:w-auto focus:outline-none focus:border-blue-500"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        >
          <option value="">გასვლის თარიღი</option>
          {/* Add options dynamically if needed */}
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

      {/* Rooms section */}
      <RoomsList handleButtonClick={handleButtonClick} />

      {/* Render RoomDetails component if selectedRoomId is not null */}
      {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
    </div>
    <Footer></Footer>
    </div>
  );
}
