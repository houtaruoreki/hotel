import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "/Images/image 7.png";
import { MdOutlineSpeed, MdArrowForward, MdEvent, MdMeetingRoom, MdMessage } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full md:w-1/4 min-h-screen border-r border-gray-400 px-6">
      <div className='flex flex-col space-y-4 w-full'>
        <img src={Logo} alt="Logo" className="w-1/2 mx-auto md:w-full" />
        <div className="flex flex-col justify-between items-start gap-4 w-full">
          <input type="text" placeholder="ძიება" className="w-full p-2 border border-gray-300 rounded" />
          <button
            className='border border-gray-300 flex items-center justify-between gap-2 p-2 w-full'
            onClick={() => navigate('/')}
          >
            <div className='flex flex-row justify-center gap-2'>

            
            <MdOutlineSpeed className='text-2xl' />
            <span>მთავარი</span>
            </div>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button
            className='border border-gray-300 flex  justify-between p-2 w-full'
            onClick={() => navigate('/Reservation')}
          >
            <div className="flex flex-row justify-center gap-2">
            <MdEvent className='text-2xl'/>
            <span>დაჯავშნა</span>
            </div>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button
            className='border border-gray-300 flex  justify-between  p-2 w-full'
            onClick={() => navigate('/Rooms')}
          >
            <div className="flex flex-row justify-center gap-2">
            <MdMeetingRoom className='text-2xl' />
            <span className='text-base'>ოთახების მართვა</span>
            </div>
            <MdArrowForward className='text-2xl'/>
          </button>
          <button
            className='border border-gray-300 flex  justify-between p-2 w-full'
            onClick={() => navigate('/Messages')}
          >
            <div className="flex flex-row justify-center gap-2">
            <MdMessage className='text-2xl'/>
            <span>შეტყობინებები</span>
            </div>
            <MdArrowForward className='text-2xl'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
