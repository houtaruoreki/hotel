import { MdSearch } from "react-icons/md";
import React from 'react';

const Main = () => {
  return (
    <div className='flex p-10 h-full flex-col'>
        <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>დაჯავშნა</span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <MdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    <div className="flex flex-col">
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-between gap-4'>
          <button className='bg-white border border-green-300 px-5 py-2 rounded-3xl'>ყველა ოთახი</button>
          <button className='text-blue-500 bg-blue-100 border border-blue-300 px-5 py-2 rounded-3xl'>თავისუფალი</button>
          <button className='text-red-500 bg-red-100 border border-red-300 px-5 py-2 rounded-3xl'>დაკავებული</button>
          <button className='text-green-500 bg-green-100 border border-green-300 px-5 py-2 rounded-3xl'>დაჯავშვნილი</button>
          <button className='text-yellow-400 bg-yellow-100 border border-yellow-300 px-5 py-2 rounded-3xl'>უცნობი</button>
          {/* Add more buttons for different status */}
        </div>
        <div>
          <button
            className='bg-mwvane rounded-xl p-2 text-white'
            onClick={() => setIsAddPopupOpen(true)}
          >
            ოთახის დამატება
          </button>
        </div>
      </div>
   </div>
   <div className="flex flex-col border border-gray-200 mt-10">
        <table className='border border-gray-200'>
          <thead>
            <tr className='bg-green-100 border border-gray-200'>
              <th className='py-2'>ოთახის ნომერი</th>
              <th>ფოტო</th>
              <th>სტუმრების რაოდენობა</th>
              <th>აღწერა</th>
              <th>სტატუსი</th>
              <th>კოტეჯი</th> 
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {rooms.map(room => (
              <RoomRow key={room.id} room={room} onEdit={() => openEditPopup(room)} />
            ))} */}
          </tbody>
        </table>
      </div>
   </div>
  );
};

export default Main;
