import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from '../config';

const RoomsList = () => {
  const [roomsData, setRoomsData] = useState([]);

  const fetchRoomsData = async () => {
    try {
      const res = await fetch(`${API_URL}/rooms/`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include', // to include credentials like cookies
      });

      if (!res.ok) {
        throw new Error(`Fetch failed with status ${res.status}`);
      }

      let data;
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text(); // Handle non-JSON responses
      }

      setRoomsData(data); // Update state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors that occur
      // Optionally handle the error further, e.g., set an error state
    }
  };

  useEffect(() => {
    fetchRoomsData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-8">
      {roomsData.slice(0, 6).map((room) => (
        <div key={room.id} className="flex flex-col items-start p-4 bg-white border-2 border-[#2D3648] rounded-lg">
          <div className="w-full h-[230px] bg-slate-500 rounded-lg flex justify-center items-center overflow-hidden">
            <img src={room.images[0].url} alt={`Room ${room.number}`} className="object-cover w-full h-full" />
          </div>
          <div className="mt-4">
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
              <button className="px-4 py-2 mt-4 text-black font-semibold bg-buttonColor2 rounded-md hover:bg-mwvane transition duration-300 ease-in-out">
                დეტალურად
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
