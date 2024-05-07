import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RoomsList = () => {
  const [roomsData, setRoomsData] = useState([]);
  const fetchRoomsData = async () => {
    const res = await fetch("http://127.0.0.1:8000/rooms");
    const data = await res.json();
    setRoomsData(data);
  };

  useEffect(() => {
    fetchRoomsData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen mx-auto">
      {roomsData.slice(0, 6).map((room) => (
        <div
          key={room.id}
          className="flex flex-col items-start p-4 bg-white border-2 border-[#2D3648] rounded-lg"
        >
          <div className="w-full bg-black h-[150px]">1</div>
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
          <Link to={`/Rooms/${room.id}`}>
            <button className="border border-gray-800 px-4 py-2 mt-2 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
