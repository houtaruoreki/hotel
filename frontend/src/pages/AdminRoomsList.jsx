import React from "react";
import AdminPages from "../components/AdminPages";

const Room = ({ number, imageSrc, capacity, description, status }) => (
  <>
    <div className="flex text-sm leading-5 bg-white rounded-lg border border-indigo-50 border-solid">
      <div className="flex flex-col font-medium text-gray-800">
        <div className="px-6 py-4 bg-white">{number}</div>
        <div className="h-px bg-indigo-50" />
      </div>
      <div className="flex flex-col py-px text-xs text-black uppercase">
        <img
          loading="lazy"
          src={imageSrc}
          alt="Room"
          className="w-full border border-gray-700 aspect-[1.14]"
        />
        <div className="h-px bg-indigo-50" />
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="px-6 py-4">{capacity}</div>
        <div className="h-px bg-indigo-50" />
      </div>
      <div className="flex flex-col leading-5 text-gray-500">
        <div className="px-6 py-4">{description}</div>
        <div className="h-px bg-indigo-50" />
      </div>
      <div className="flex flex-col py-px text-xs">
        <div className="flex justify-center px-5 py-4 text-center text-emerald-400 ">
          <div className="flex justify-center ">
            <div className="px-2 py-0.5 bg-indigo-50 rounded-2xl">
              <div>{status}</div>
            </div>
          </div>
        </div>
        <div className="h-px bg-indigo-50" />
      </div>
      <div className="flex flex-col py-px text-teal-700">
        <div className="bg-green-100 h-[55px]" />
        <div className="flex flex-col justify-center px-5 py-4">
          <button type="button" className="px-3 py-2.5 bg-green-100 rounded-lg">
            რედაქტირება
          </button>
        </div>
        <div className="h-px bg-indigo-50" />
      </div>
    </div>
    <div></div>
  </>
);

const RoomList = ({ rooms }) => (
  <>
    <div className="flex text-sm leading-5 bg-white rounded-lg border border-indigo-50 border-solid">
      <div className="px-6 py-2.5 text-xs leading-5 text-black uppercase bg-green-100">
        ოთახის ნომერი
      </div>
      <div className="px-6 py-2.5 bg-green-100">ფოტო</div>
      <div className="px-4 py-2.5 text-xs leading-5 text-black uppercase bg-green-100">
        სტუმრების რაოდენობა
      </div>

      <div className="px-6 py-2.5 text-xs leading-5 text-black uppercase bg-green-100">
        აღწერა
      </div>

      <div className="px-6 py-2.5 text-black uppercase bg-green-100">
        სტატუსი
      </div>
    </div>
    {rooms.map((room, index) => (
      <Room key={index} {...room} />
    ))}

    <AdminPages></AdminPages>
  </>
);

const MyComponent = () => {
  const rooms = [
    {
      number: "#001",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a55a8e930d3f9191a73541b5e0c81d587fcc458bb962fb7451e22d0daf1b3f3b?apiKey=93b467e765604462b0596adc2a62adce&",
      capacity: 2,
      description: "ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...",
      status: "დაჯავშნილი",
    },

    {
      number: "#002",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a55a8e930d3f9191a73541b5e0c81d587fcc458bb962fb7451e22d0daf1b3f3b?apiKey=93b467e765604462b0596adc2a62adce&",
      capacity: 2,
      description: "ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...",
      status: "დაჯავშნილი",
    },
    {
      number: "#003",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a55a8e930d3f9191a73541b5e0c81d587fcc458bb962fb7451e22d0daf1b3f3b?apiKey=93b467e765604462b0596adc2a62adce&",
      capacity: 2,
      description: "ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...",
      status: "დაჯავშნილი",
    },
  ];

  return <RoomList rooms={rooms} />;
};

export default MyComponent;
