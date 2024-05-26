// EditRoomPopup.js
import React, { useState, useEffect } from 'react';

const EditRoomPopup = ({ room, onClose, onSave }) => {
  const [editedRoom, setEditedRoom] = useState({
    id: room.id,
    number: room.number,
    description: room.description,
    status: room.status,
    is_cottage: room.is_cottage
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedRoom);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-2/5">
        <h2 className="text-2xl mb-4 font-bold">ოთახის რედაქტირება</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 ">ოთახის ნომერი</label>
            <input
              type="text"
              name="number"
              value={editedRoom.number}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">აღწერა</label>
            <textarea
              name="description"
              value={editedRoom.description}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">სტატუსი</label>
            <select
              name="status"
              value={editedRoom.status}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            >
              <option value={false}>თავისუფალი</option>
              <option value={true}>დაკავებული</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">კოტეჯი</label>
            <select
              name="is_cottage"
              value={editedRoom.is_cottage}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            >
              <option value={false}>არა</option>
              <option value={true}>კი</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
            >
              გაუქმება
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              შენახვა
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoomPopup;
