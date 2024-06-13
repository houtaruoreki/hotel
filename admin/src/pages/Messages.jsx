import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import MessageRow from "../components/MessageTableRow";

const Main = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('https://8df2-95-104-36-132.ngrok-free.app/message/');
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);
  return (
    <div className="flex p-10 h-full flex-col">
     <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>შეტყობინებები</span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <MdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col border border-gray-200 mt-10">
        <table className='border border-gray-200'>
          <thead>
            <tr className='bg-green-100 border border-gray-200'>
              <th>სახელი</th>
              <th>კმაყოფილია</th>
              <th>ელ.ფოსტა</th>
              <th>კომენტარი</th> 
              <th></th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
              <MessageRow key={message.id} message={message} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
