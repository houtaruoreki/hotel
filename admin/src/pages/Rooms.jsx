import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import RoomRow from '../components/TableRows';
import AddRoomPopup from '../components/AddRoom';  
import EditRoomPopup from '../components/EditRoom';  // Import the EditRoomPopup component

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editRoomData, setEditRoomData] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('https://8df2-95-104-36-132.ngrok-free.app/rooms/');
      const data = await response.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  const handleAddRoom = async (newRoom) => {
    try {
      const response = await fetch('https://8df2-95-104-36-132.ngrok-free.app/rooms/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoom),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add room');
      }
  
      const addedRoom = await response.json();
      setRooms([...rooms, addedRoom]);
      setIsAddPopupOpen(false);
    } catch (error) {
      console.error('Error adding room:', error.message);
    }
  };

  const handleEditRoom = async (updatedRoom) => {
    try {
      const response = await fetch(`https://8df2-95-104-36-132.ngrok-free.app/rooms/${updatedRoom.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRoom),
      });
  
      if (!response.ok) {
        throw new Error('Failed to edit room');
      }
  
      const editedRoom = await response.json();
      const updatedRooms = rooms.map(room => (room.id === editedRoom.id ? editedRoom : room));
      setRooms(updatedRooms);
      setIsEditPopupOpen(false);
    } catch (error) {
      console.error('Error editing room:', error.message);
    }
  };

  const openEditPopup = (room) => {
    console.log("Opening edit popup for room:", room);
    setEditRoomData(room);
    setIsEditPopupOpen(true);
  };
  

  return (
    <div className='flex p-10 h-full flex-col'>
      {isAddPopupOpen && (
        <AddRoomPopup
          onClose={() => setIsAddPopupOpen(false)}
          onSave={handleAddRoom}
        />
      )}
      {isEditPopupOpen && editRoomData && (
        <EditRoomPopup
          room={editRoomData}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleEditRoom}
        />
      )}
      <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>ოთახების მართვა</span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <MdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      {/* Buttons for filtering rooms */}
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
      {/* Display rooms in a table */}
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
            {rooms.map(room => (
              <RoomRow key={room.id} room={room} onEdit={() => openEditPopup(room)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rooms;
