import { MdSearch } from "react-icons/md";
import React from 'react';
import { useState, useEffect } from "react";
import API_URL from '../config';

const Main = () => {
  const [reservation, setReservation] = useState([]);


  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`${API_URL}/bookinglist/`);
      const data = await response.json();
      setReservation(data);
    };
    fetchReservation();
  }, []);
  return (
    <div className='flex p-10 h-full flex-col'>
        <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>დაჯავშნა</span>
        
      </div>
    
   <div className="flex flex-col border border-gray-200 mt-10">
        <table className='border border-gray-200'>
          <thead>
            <tr className='bg-green-100 border border-gray-200'>
              <th className='p-2'>სახელი გვარი</th>
              <th>ელ. ფოსტა</th>
              <th>ტელ. ნომერი</th>
              <th>სტუმრების რაოდენობა</th>
              <th>შემოსვლის თარიღი</th>
              <th>გასვლის თარიღი</th> 
              <th className="p-2">კომენტარი</th>
              
            </tr>
          </thead>
          <tbody className="text-gray-500">
  {reservation.map(res => (
    <tr key={res.id} className="border-b border-gray-200">
      <td className="px-4 py-2 text-center">{res.user.first_name} {res.user.last_name}</td>
      <td className="px-4 py-2 text-center">{res.user.email}</td>
      <td className="px-4 py-2 text-center">{res.user.number}</td>
      <td className="px-4 py-2 text-center">{res.guests}</td>
      <td className="px-4 py-2 text-center">{res.checkin_time}</td>
      <td className="px-4 py-2 text-center">{res.checkout_time}</td>
      <td className="px-4 py-2 text-center">{res.comment}</td>
    </tr>
  ))}
</tbody>



        </table>
      </div>
   </div>
  );
};

export default Main;
