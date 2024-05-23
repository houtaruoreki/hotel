import React from 'react';
import Logo from "/Images/image 7.png";
import { MdOutlineSpeed , MdArrowForward, MdEvent, MdMeetingRoom, MdMessage } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex h-full w-full md:w-1/5 min-h-screen border-r border-gray-400 px-6">
      <div className='flex flex-col space-y-4 w-full'>
        <img src={Logo} alt="Logo" className="w-1/2 mx-auto md:w-full" />
        <div className="flex flex-col justify-between items-start gap-4 w-full">
          <input type="text" placeholder="ძიება" className="w-full p-2 border border-gray-300 rounded" />
          <button className='border border-gray-300 flex items-center justify-center gap-2 p-2 w-full'>
            <MdOutlineSpeed className='text-2xl' />
            <span className='text-base'>ინფორმაციული დაფა</span>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button className='border border-gray-300 flex items-center justify-center gap-2 p-2 w-full'>
            <MdEvent className='text-2xl'/>
            <span>დაჯავშნა</span>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button className='border border-gray-300 flex items-center justify-center gap-2 p-2 w-full'>
            <MdMeetingRoom className='text-2xl' />
            <span>ოთახების მართვა</span>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button className='border border-gray-300 flex items-center justify-center gap-2 p-2 w-full'>
            <MdMessage className='text-2xl'/>
            <span>შეტყობინებები</span>
            <MdArrowForward className='text-2xl'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
