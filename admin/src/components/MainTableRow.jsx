import React from 'react';

const ContactRow = ({info, onEdit}) => {
  return (
    <tr className='border-b border-gray-200'>
      <td className='pl-5'>{info.title}</td>
      <td className='pl-5 w-1/2'>{info.description}</td>
      <td className='pl-5'>
      <button className='bg-green-100 text-green-600 p-2 rounded-lg font-base' onClick={onEdit}>
          რედაქტირება
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
