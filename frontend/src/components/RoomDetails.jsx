import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "/Images/image 8.png";

export default function RoomDetails() {
  const [roomDetails, setRoomDetails] = useState(null);
  const { roomId } = useParams();

  useEffect(() => {
    // Fetch room details when the component mounts
    fetch(`${API_URL}/rooms/${roomId}/`)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data))
      .catch((error) => console.error("Error fetching room details:", error));
  }, [roomId]);

  if (!roomDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-white px-16 pb-5">
      <div className="text-center">
        <h2 className="text-mwvane text-2xl font-bold pt-[96px]">
          ოთახის დეტალები
        </h2>
        <p className="text-[#2D3648] mt-14 text-center text-xl font-light">
          დატკბით დასვენებით და სტუმართმოყვარეობით ჩვენს ელეგანტურ ოთახებში.
          ლამაზი ხედებითა და პრემიუმ კეთილმოწყობით, თქვენი დასვენება იქნება
          არაჩვეულებრივი გამოცდილება
        </p>
      </div>
      <div className="flex mt-[100px] gap-[85px]">
        <div className="w-[648px] h-[503px] bg-gray-500">
          <img src={Image} className=""/>
        </div>
        <div>
          <h2 className="text-xl text-black font-bold mt-5">ოთახის ნომერი</h2>
          <p className="text-l text-[#2D3648] font-normal mt-4">
            {roomDetails.number}
          </p>
          <h2 className="text-xl text-black font-bold mt-5">აღწერა</h2>
          <p className="text-l text-[#2D3648] font-normal mt-4">{roomDetails.description}</p>
          <h2 className="text-xl text-black font-bold mt-5">სტატუსი </h2>
          <p className="text-l text-[#2D3648] font-normal mt-4">{roomDetails.status ? "დაკავაებულია" : "თავისუფალია"}</p>
        </div>
      </div>
    </div>
  );
}
