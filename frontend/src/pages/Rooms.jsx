import React, { useEffect, useState } from "react";

export default function Rooms() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/rooms/')
      .then(response => response.json())
      .then(data => setRoomsData(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div className="bg-mwvane text-white p-10">
      <div className="flex flex-col justify-center items-center h-full mb-1">
        <h2>კეთილი იყოს თქვენი მობრძანება</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          exercitationem! Quo error veritatis sunt ratione quisquam
          voluptatum fuga distinctio, repellendus, tempora veniam
          ipsam aspernatur exercitationem autem quas officia perferendis? Nostrum?</p>

        <h2 className="text-xl">ოთახები</h2>
      </div>
      <div className="overflow-x-auto h-96">
        <div className="grid grid-cols-3 gap-4 max-w-screen">
          {roomsData.map((room, index) => (
            <div key={room.id} className={`flex flex-col items-start p-4 bg-white border-2 border-gray-800 rounded-lg ${index >= 6 ? 'hidden' : ''}`}>
              <p className="text-lg font-semibold mb-2 text-gray-600">Room {room.number}</p>
              <p className="text-gray-600">{room.description}</p>
              <p className="text-gray-600">{room.status ? "Available" : "Occupied"}</p>
              <p className="text-gray-600">{room.is_cottage ? "Cottage" : "Not Cottage"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
