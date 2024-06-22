import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import MessageRow from "../components/MessageTableRow";
import API_URL from '../config';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [newMessageIds, setNewMessageIds] = useState([]);
  const [highlighted, setHighlighted] = useState(true);

  useEffect(() => {
    // Function to fetch messages
    const fetchMessages = async () => {
      const response = await fetch(`${API_URL}/message/`);
      const data = await response.json();

      // Check if there are new messages
      if (data.length > 0 && data.at(-1).id !== lastMessageId) {
        setLastMessageId(data.at(-1).id);
        // Notify user if there are new messages
        if (lastMessageId !== null) {
          console.log("New message detected");
          new Notification('New Message', {
            body: `You have a new message from ${data.at(-1).fullname}`,
          });

          // Track new message IDs
          const newIds = data.filter(message => message.id > lastMessageId).map(message => message.id);
          setNewMessageIds(newIds);
        }
      } else {
        console.log("No new message");
      }

      setMessages(data);
    };

    // Check for notification permission
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }

    // Initial fetch
    fetchMessages();

    // Set up interval to fetch messages every 30 seconds
    const intervalId = setInterval(fetchMessages, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [lastMessageId]);

  useEffect(() => {
    // Reset newMessageIds after 5 seconds
    if (highlighted && newMessageIds.length > 0) {
      const timer = setTimeout(() => {
        setHighlighted(false);
        setNewMessageIds([]);
      }, 5000);

      // Cleanup the timer on component unmount or if new messages arrive
      return () => clearTimeout(timer);
    }
  }, [newMessageIds, highlighted]);

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
              <th>დრო</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
              <MessageRow key={message.id} message={message} isNew={highlighted && newMessageIds.includes(message.id)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
