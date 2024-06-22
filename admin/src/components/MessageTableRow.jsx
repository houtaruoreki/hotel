import React from 'react';

const MessageRow = ({ message, isNew }) => {
  return (
    <tr className={`border border-gray-200 ${isNew ? 'bg-yellow-100' : ''}`}>
      <td className='pl-5'>{message.fullname}</td>
      <td className='pl-5'>{message.satisfied}</td>
      <td className='pl-5'>{message.email}</td>
      <td className='pl-5 text-gray-500'>{message.message}</td>
      <td className='pl-5 text-gray-500'>{message.date}</td>
      <td>
        <button className='bg-green-100 text-green-600 p-2 rounded-lg font-base'>
          ნახვა
        </button>
      </td>
    </tr>
  );
};

export default MessageRow;
