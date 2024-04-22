import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., sending form data to a server
    console.log("Form Data:", formData);
    // You can add your logic to submit the form data or perform other actions here
  };

  return (
      <div > 
        <h2 className="text-4xl flex justify-center bg-mwvane text-white p-10">კონტაქტი</h2>

    <div className="flex justify-between bg-mwvane text-white p-10">
      <div className="max-w-lg">
        
        <h2 className="text-4xl mb-4">მოგვწერე</h2>
        <p className="text-sm mb-4">
          გამოიყენეთ ეს საკონტაქტო ფორმა feedback-ის გასაზიარებლად და ყველა
          თქვენს კითხვაზე პასუხის მისაღებად.
        </p>
        <p className="text-sm mb-4">+995 599 99 99 99</p>
        <p className="text-sm mb-4">guesthouse@gmail.com</p>
        <p className="text-sm">ჩოხატაური, ჩხოკოურა</p>
      </div>
      <div className="max-w-lg">
        <div className="mb-4">
          <label className="block mb-1">სახელი</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">გვარი</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">ელ-ფოსტა</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">კმაყოფილი ხართ ჩვენი სერვისით?</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
          >
            <option  value="">აირჩიეთ შეფასება</option>
            <option value="yes">კი</option>
            <option value="no">არა</option>
            <option value="partially">ნაწილობრივ</option>
          </select>
        </div>
        <div className="text-blackmb-4">
          <label className=" block mb-1">კომენტარი</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            className="text-black border border-gray-400 px-4 py-2 rounded-md w-full max-w-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          გაგზავნა
        </button>
      </div>
    </div>
    </div>
  );
}

