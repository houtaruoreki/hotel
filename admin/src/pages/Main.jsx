import React, { useState, useEffect } from 'react';
import ContactRow from '../components/MainTableRow';
import EditItemPopup from '../components/EditItem';
const Main = () => {
  const [contact, setInfo] = useState([]);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editItemData, setEditItemData] = useState(null);


  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(`${API_URL}/contact/`);
      const data = await response.json();
      setInfo(data);
    };

    fetchInfo();
  }, []);

  const handleEditItem = async (updatedItem) => {
    try {
      const response = await fetch(`${API_URL}/contact/${updatedItem.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
  
      if (!response.ok) {
        throw new Error('Failed to edit item');
      }
  
      const editedItem = await response.json();
      const updatedItems = contact.map(item => (item.id === editedItem.id ? editedItem : item));
      setInfo(updatedItems);
      setIsEditPopupOpen(false);
    } catch (error) {
      console.error('Error editing room:', error.message);
    }
  };

  const openEditPopup = (item) => {
    console.log("Opening edit popup for item:", item);
    setEditItemData(item);
    setIsEditPopupOpen(true);
  };

  return (
    <div className="flex p-10 h-full flex-col">
      {isEditPopupOpen && editItemData && (
        <EditItemPopup
          item={editItemData}
          onClose={() => setIsEditPopupOpen(false)}
          onSave={handleEditItem}
        />
      )}
      <div className='flex flex-row justify-between mb-10'>
        <span className='text-3xl font-bold'>მთავარი</span>
        <div className="relative">
          
        </div>
      </div>
     

      <table className='border border-gray-200'>
          <thead>
            <tr className='bg-green-100 border border-gray-200'>
              <th>სათაური</th>
              <th>ტექსტი</th> 
              <th>ცვლილება</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <ContactRow key={item.id} info={item} onEdit={() => openEditPopup(item)}/>
            ))}
          </tbody>
        </table>

    </div>
  );
};

export default Main;
