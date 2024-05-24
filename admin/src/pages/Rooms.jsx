import React from 'react';
import {MdSearch} from "react-icons/md";
const Rooms = () => {
  return (
    <div className='flex p-10 h-full flex-col'>
      <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>ოთახების მართვა</span>
        <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className=" px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <MdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
    </div>
        
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-between gap-4'>
        <button className='bg-white border border-green-300 px-5 py-2 rounded-3xl'>
          ყველა
        </button>
        <button className='bg-blue-100 text-blue-500 border border-blue-700 px-5  py-2 rounded-3xl'>
          თავისუფალი
        </button>
        <button className='bg-red-100 text-red-500 border border-red-700 px-5  py-2 rounded-3xl'>
          დაკავებული
        </button>
        <button className='bg-green-100 text-green-500 border border-green-700 px-5  py-2 rounded-3xl'>
          დაჯავშნილი
        </button>
        <button className='bg-yellow-100 text-yellow-500 border border-yellow-700 px-5  py-2 rounded-3xl'>
          უცნობი
        </button>
        </div>
        <div>
        <button className=' bg-mwvane rounded-xl p-2 text-white'>
        ოთახის დამატება
        </button>
        </div>
       
      </div>
      <div className="flex flex-col border border-gray-200 mt-10">
       
        <table className='boder border-gray-200'>
          <tr className='bg-green-100 border border-gray-200'>
            <th className='py-2'>ოთახის ნომერი</th>
            <th>ფოტო</th>
            <th>სტუმრების რაოდენობა</th>
            <th>აღწერა</th>
            <th>სტატუსი</th>
            <th></th>
          </tr>
          <tr className='border-b border-gray-200'>
            <th>1</th>
            <th className='border border-black'>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
          <tr>
            <th>1</th>
            <th className='border border-gray-500'>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Rooms;
