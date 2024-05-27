import React from "react";
import RoomsList from "../components/RoomsList"; // Import the RoomsList component
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <motion.div
      className="bg-foni text-[#2D3648] p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl flex justify-center mb-4 text-mwvane font-bold   ">დაჯავშნე</h2>
      <p className="text-[#2D3648]">
        თქვენი საოცნებო ადგილის დაჯავშნა არასოდეს ყოფილა ადვილი ჩვენი დაჯავშნის
        გამარტივებული პროცესით. უბრალოდ შეავსეთ ჩვენი მომხმარებლისთვის
        მოსახერხებელი დაჯავშნის ფორმა, რათა უზრუნველყოთ სასურველი საცხოვრებელი
        ადგილი და დაიწყოთ დასამახსოვრებელი მოგზაურობა ჩვენს სასტუმროში. მხოლოდ
        რამდენიმე დაწკაპუნებით შეგიძლიათ აირჩიოთ სასურველი თარიღები და მიუთითეთ
        რაიმე განსაკუთრებული მოთხოვნა,რომ თქვენი დასვენება სრულყოფილებამდე იყოს
        მორგებული.
      </p>
      <div className="mb-[2%]"></div> {/*Spacer Div */}
      <div className="flex justify-center">
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block mb-1">სახელი</label>
            <input
              type="text"
              name="name"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">გვარი</label>
            <input
              type="text"
              name="surname"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">ელ-ფოსტა</label>
            <input
              type="email"
              name="email"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
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
                name="phoneNumber"
                className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
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
            <label className="block mb-1">გასვლის თარიღი</label>
            <input
              type="datetime-local"
              name="exitDate"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">სტუმრების რაოდენობა</label>
            <input
              type="number"
              name="guestNumber"
              min="1"
              max="15"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">ოთახის ტიპი</label>
            <select
              name="roomType"
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            >
              <option value="">აირჩიეთ ოთახის ტიპი</option>
              <option value="standard">სტანდარტული</option>
              <option value="suite">სუიტი</option>
              <option value="deluxe">დელუქსი</option>
        
            </select>
          </div>
          <div className="mb-4 col-span-1">
            <label className="block mb-1">კომენტარი</label>
            <textarea
              name="comment"
              rows={4}
              className="border border-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            ></textarea>
          </div>
          <div className="mb-4 col-span-1  ">
            <button className="bg-buttonColor text-buttonText font-bold   px-6 py-3 rounded-md hover:bg-green-800 1transition duration-300 ease-in-out ">
              დაჯავშნე ოთახი
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">ოთახები</h2>
        <div className="border-b-2 border-[#bbfbcb] mb-10"></div>
        <div className="overflow-x-auto flex scrollbar scrollbar-thumb-buttonColor scrollbar-track-mwvane no-scrollbar">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/400x300?text=Rooms+Photo+${
                index + 1
              }`}
              alt={`Room Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>
    </motion.div>
  );
}
