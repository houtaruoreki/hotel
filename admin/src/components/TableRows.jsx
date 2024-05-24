import React, { useEffect, useState } from 'react';

const TableRows = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('localhost:8000/api/rooms')
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {rooms.map((room, index) => (
        <tr key={index} className='border-b border-gray-200'>
          <th>{room.roomNumber}</th>
          <th className='border border-black'>{room.photo}</th>
          <th>{room.guests}</th>
          <th>{room.description}</th>
          <th>{room.status}</th>
          <th> {/* Actions or empty cell */} </th>
        </tr>
      ))}
    </>
  );
};

export default TableRows;
