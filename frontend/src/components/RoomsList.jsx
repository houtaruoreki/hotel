import React, { useEffect, useState } from "react";

const RoomsList = ({ handleButtonClick }) => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/rooms/")
      .then((response) => response.json())
      .then((data) => setRoomsData(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
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
          <button
            className="border border-gray-800 px-4 py-2 mt-2 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
            onClick={() => handleButtonClick(room.id)}
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;