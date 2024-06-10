import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import love from "/Images/loveButton.png";

const RoomsList = () => {
  const [roomsData, setRoomsData] = useState([]);
  const fetchRoomsData = async () => {
   try{
    const res = await fetch("https://08ed-95-104-36-132.ngrok-free.app/rooms");
    const data = await res.json();
    setRoomsData(data);
   }catch(err){
    console.log(err)
   }
  };

  useEffect(() => {
    fetchRoomsData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-32 my-[5%] mx-[5%] ">
      {roomsData.slice(0, 6).map((room) => (
        <div>
          <div
            key={room.id}
            className="flex flex-col items-start p-4 bg-white border-2 border-[#2D3648] rounded-lg"
          >
            <div className=" rounded-lg w-full flex flex-row-reverse bg-slate-500 h-[230px]">
              <img src={room.image}/>
              <div>
              <img src={love} className=" rounded-lg pr-1.5 pt-1.5  "/>
              </div>
            </div>

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
              <button className="px-4 py-2 mt-2 text-black font-semibold bg-buttonColor2 rounded-md hover:bg-mwvane  transition duration-300 ease-in-out">
                დეტალურად
              </button>
            </Link>
          </div>
        </div>
      ))}
      <div className=""></div> {/*Spacer Div */}
    </div>
  );
};

export default RoomsList;
