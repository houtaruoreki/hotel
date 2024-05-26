import React from 'react';

const RoomRow = ({ room, onEdit }) => {
  const renderButton = () => {
    if (room.status) {
      // Room is occupied
      return <button className='bg-red-100 text-red-500 p-2 rounded-xl'>დაკავებული</button>;
    } else {
      // Room is not occupied
      return <button className='bg-blue-100 text-blue-500 p-2 rounded-xl'>თავისუფალი</button>;
    }
  };

  return (
    <tr className='border-b border-gray-200'>
      <td className='pl-5'>#{room.number}</td>
      <td className='border border-gray-500'>
        <img src={room.photo} alt={`Room ${room.number}`} className='w-16 h-16 object-cover' />
      </td>
      <td className='pl-5'>{room.guests}</td>
      <td className='pl-5'>{room.description}</td>
      <td>
        {renderButton()}
      </td>
      <td>
        <button className='bg-green-100 text-green-600 p-2 rounded-lg font-base' onClick={onEdit}>
          რედაქტირება
        </button>
      </td>
    </tr>
  );
};

export default RoomRow;
