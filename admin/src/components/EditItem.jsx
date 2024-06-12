import React, { useState, useEffect } from 'react';

const EditItemPopup = ({ item, onClose, onSave }) => {
  const [editedItem, setEditedItem] = useState({
    id: item.id,
    title: item.title,
    description: item.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedItem);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-2/5">
        <h2 className="text-2xl mb-4 font-bold">საკონტაქტო ინფორმაციის რედაქტირება</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 ">სათაური</label>
            <input
              type="text"
              name="title"
              value={editedItem.title}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">აღწერა</label>
            <textarea
              name="description"
              value={editedItem.description}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md w-full"
              required
            ></textarea>
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

export default EditItemPopup;
