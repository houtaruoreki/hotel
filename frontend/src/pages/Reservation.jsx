import React from "react";
import RoomsList from "../components/RoomsList"; // Import the RoomsList component
import { motion } from "framer-motion";

export default function Reservation() {
  const roomPhotos = [
    "https://images.unsplash.com/photo-1565629196891-2ddb37c9e9fc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D1",
    "https://images.unsplash.com/photo-1662672324132-90d55416a840?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1628304502409-4d5dcdd7933d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <motion.div
      className="bg-foni text-[#2D3648] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" mx-[5%] pt-9">
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
        <div className="flex gap-10 justify-center ">
            <div className="mb-4">
              <label className=" mb-1">სახელი</label>
              <input
                type="text"
                name="name"
                placeholder="შეიყვანე სახელი"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              />
              <div className="h-10"></div> {/*Spacer Div */}
              <div className="mb-4">
                <label className=" mb-1">ტელეფონი</label>
                <div className="flex items-center">
                  <select
                    name="countryCode"
                    className="border border-gray-400 px-4 py-2 rounded-xl mr-2 focus:outline-none focus:border-blue-500 text-black"
                  >
                    <option value="1">+1</option>
                    <option value="44">+44</option>
                    <option value="995">+995</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="ტელეფონის ნომერი"
                    name="phoneNumber"
                    className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
                  />
                </div>
                <div className="h-10"></div> {/*Spacer Div */}
              </div>
              <div className="mb-4">
                <label className=" mb-1">სტუმრების რაოდენობა</label>
                <input
                  type="number"
                  name="guestNumber"
                  min="1"
                  max="15"
                  placeholder="აირჩიე რაოდენობა"
                  className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
                />
              </div>
            </div>
          <div className="">
            <div className=" ">
              <label className=" mb-1">გვარი</label>
              <input
                type="text"
                placeholder="შეიყვანე გვარი"
                name="surname"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="h-10"></div> {/*Spacer Div */}
            <div className="mb-4">
              <label className=" mb-1">შესვლის თარიღი</label>
              <input
                type="datetime-local"
                name="entryDate"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="h-10"></div> {/*Spacer Div */}
            <div className="mb-4">
              <label className=" mb-1">ოთახის ტიპი</label>
              <select
                name="roomType"
                className="border border-gray-400 px-4 py-2.5 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
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
              <label className=" mb-1">ელ-ფოსტა</label>
              <input
                type="email"
                name="email"
                placeholder="შეიყვანე ელ-ფოსტა"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="h-10"></div> {/*Spacer Div */}
            <div className="">
              <label className=" mb-1">გასვლის თარიღი</label>
              <input
                type="datetime-local"
                name="outDate"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="h-10"></div> {/*Spacer Div */}
            <div className="mb-4 col-span-1">
              <label className=" mb-1">მოთხოვნა ან კომენტარი</label>
              <textarea
                name="comment"
                rows={4}
                placeholder="აღწერა"
                className="border border-gray-400 px-4 py-2 rounded-xl w-full focus:outline-none focus:border-blue-500 text-black"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
          {roomPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Room Photo ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
