// AddRoomPopup.js
import React, { useState } from 'react';

const AddRoomPopup = ({ onClose, onSave }) => {
  const [room, setRoom] = useState({
    number: '',
    description: '',
    status: false,
    is_cottage: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with room:", room);
    onSave(room);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-2/5">
        <h2 className="text-2xl mb-4 font-bold">ოთახის დამატება</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 ">ოთახის ნომერი</label>
            <input
              type="text"
              name="number"
              value={room.number}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">აღწერა</label>
            <textarea
              name="description"
              value={room.description}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">სტატუსი</label>
            <select
              name="status"
              value={room.status}
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
              value={room.is_cottage}
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

export default AddRoomPopup;
