import React, { useEffect, useState } from "react";
import RoomDetails from "../components/RoomDetails"; // Import the RoomDetails component

export default function Rooms() {
  const [roomsData, setRoomsData] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null); // State to store the ID of the selected room
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestsCount, setGuestsCount] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/rooms/")
      .then((response) => response.json())
      .then((data) => setRoomsData(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  // Function to handle button click
  const handleButtonClick = (roomId) => {
    setSelectedRoomId(roomId);
    console.log("details is clicked");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Guests Count:", guestsCount);
    // You can add further logic here, like sending form data to backend
  };

  return (
    <div className="bg-mwvane text-white p-10">
      <div className="flex flex-col justify-center items-center h-full mb-1">
        <h2>კეთილი იყოს თქვენი მობრძანება</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          exercitationem! Quo error veritatis sunt ratione quisquam voluptatum
          fuga distinctio, repellendus, tempora veniam ipsam aspernatur
          exercitationem autem quas officia perferendis? Nostrum?
        </p>

        <h2 className="text-xl">ოთახები</h2>
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

      <div className="grid grid-cols-3 gap-4 max-w-screen mx-auto">
        {roomsData.slice(0, 6).map((room) => (
          <div
            key={room.id}
            className="flex flex-col items-start p-4 bg-white border-2 border-gray-800 rounded-lg"
          >
            <p className="text-lg font-semibold mb-2 text-gray-600">
              Room {room.number}
            </p>
            <p className="text-gray-600">{room.description}</p>
            <p className="text-gray-600">
              {room.status ? "Available" : "Occupied"}
            </p>
            <p className="text-gray-600">
              {room.is_cottage ? "Cottage" : "Not Cottage"}
            </p>
            {/* Pass room ID to handleButtonClick */}
            <button
              className="border border-gray-800 px-4 py-2 mt-2 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
              onClick={() => handleButtonClick(room.id)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
      {/* Render RoomDetails component if selectedRoomId is not null */}
      {selectedRoomId && <RoomDetails roomId={selectedRoomId} />}
    </div>
  );
}
