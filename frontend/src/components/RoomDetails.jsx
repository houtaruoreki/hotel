import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RoomDetails() {
  const [roomDetails, setRoomDetails] = useState(null);
  const { roomId } = useParams();

  useEffect(() => {
    // Fetch room details when the component mounts
    fetch(`http://127.0.0.1:8000/rooms/${roomId}/`)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data))
      .catch((error) => console.error("Error fetching room details:", error));
  }, [roomId]);

  if (!roomDetails) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="bg-mwvane px-16 pb-5">
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold pt-[96px]">
          ოთახის დეტალები
        </h2>
        <p className="text-[#D9D9D9] mt-14 text-center text-xl font-light">
          დატკბით დასვენებით და სტუმართმოყვარეობით ჩვენს ელეგანტურ ოთახებში.
          ლამაზი ხედებითა და პრემიუმ კეთილმოწყობით, თქვენი დასვენება იქნება
          არაჩვეულებრივი გამოცდილება
        </p>
      </div>
      <div className="flex mt-[100px] gap-[85px]">
        <div className="w-[648px] h-[503px] bg-gray-500">1</div>
        <div>
          <h2 className="title">{roomDetails.number}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
            tellus arcu sit nibh consectetur.
          </p>
          <h2 className="title">აღწერა</h2>
          <p>{roomDetails.description}</p>
          <h2>სტატუსი </h2>
          <p>{roomDetails.status ? "დაკავაებულია" : "თავისუფალია"}</p>
          <h2>სტუმრების რაოდენობა</h2>
          <p>ერთი</p>
        </div>
      </div>
    </div>
  );
}
