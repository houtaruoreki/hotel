import React from "react";
import RoomsList from "../components/RoomsList"; // Import the RoomsList component
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <motion.div
      className="bg-foni text-[#2D3648] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" mx-[5%]">
        <div className=" mx-[16%]   ">
          <h2 className="text-2xl flex justify-center mb-4 text-mwvane font-bold   ">
            დაჯავშნე
          </h2>

          <p className="text-[#2D3648] mb-5 text-center">
            თქვენი საოცნებო ადგილის დაჯავშნა არასოდეს ყოფილა ადვილი ჩვენი
            დაჯავშნის გამარტივებული პროცესით. უბრალოდ შეავსეთ ჩვენი
            მომხმარებლისთვის მოსახერხებელი დაჯავშნის ფორმა
          </p>
        </div>
        <div className=" grid  ">
        <div className="flex gap-[5%] justify-center ">
          <div className="flex ">
            <div className="mb-4  ">
              <label className="block mb-1">სახელი</label>
              <input
                type="text"
                name="name"
                placeholder="შეიყვანე სახელი"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
              <div className="mb-4">
                <label className="block mb-1">ტელეფონი</label>
                <div className="flex items-center">
                  <select
                    name="countryCode"
                    className="border border-gray-400 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500 text-black"
                  >
                    <option value="1">+1</option>
                    <option value="44">+44</option>
                    <option value="995">+995</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="ტელეფონის ნომერი"
                    name="phoneNumber"
                    className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">სტუმრების რაოდენობა</label>
                <input
                  type="number"
                  name="guestNumber"
                  min="1"
                  max="15"
                  placeholder="აირჩიე რაოდენობა"
                  className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className=" ">
              <label className="block mb-1">გვარი</label>
              <input
                type="text"
                placeholder="შეიყვანე გვარი"
                name="surname"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">შესვლის თარიღი</label>
              <input
                type="datetime-local"
                name="entryDate"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">ოთახის ტიპი</label>
              <select
                name="roomType"
                className="border border-gray-400 px-4 py-2.5 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              >
                <option value="">აირჩიეთ ოთახის ტიპი</option>
                <option value="standard">სტანდარტული</option>
                <option value="suite">სუიტი</option>
                <option value="deluxe">დელუქსი</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="">
              <label className="block mb-1">ელ-ფოსტა</label>
              <input
                type="email"
                name="email"
                placeholder="შეიყვანე ელ-ფოსტა"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="">
              <label className="block mb-1">გასვლის თარიღი</label>
              <input
                type="datetime-local"
                name="outDate"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block mb-1">მოთხოვნა ან კომენტარი</label>
              <textarea
                name="comment"
                rows={4}
                placeholder="აღწერა"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-4 place-self-center ">
          <button className="bg-buttonColor text-buttonText font-bold px-16 py-4 rounded-md hover:bg-green-800 1transition duration-300 ease-in-out ">
            დაჯავშნე ოთახი
          </button>
        </div>
        </div>

        <h2 className="text-2xl text-mwvane font-semibold mt-8 mb-4">ოთახები</h2>
        <div className="border-b-2 border-neutralText mb-10"></div>
        <div className="overflow-x-auto flex scrollbar scrollbar-thumb-buttonColor scrollbar-track-mwvane no-scrollbar">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/400x300?text=Rooms+Photo+${
                index + 1
              }`}
              alt={`Room Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4 mb-10"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
