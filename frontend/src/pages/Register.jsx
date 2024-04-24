import React, { useState } from "react";
import regphoto from "../assets/register.png";
import image8 from "../assets/image8.png";

export default function Service() {
  const [activeTab, setActiveTab] = useState("authorization");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${regphoto})`, opacity: 1 }}
      ></div>

      {/* Tabs */}
      <div className="z-10 bg-white rounded-lg shadow-lg p-8 max-w-md relative border border-green-800">
        {/* Icon */}
        <div className="left-0 right-0 flex justify-center items-center z-10 mb-4">
          <img src={image8} alt="Icon" className="w-15 h-15" />
        </div>

        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 text-center font-bold text-lg ${
              activeTab === "authorization" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleTabChange("authorization")}
          >
            Authorization
          </button>
          <button
            className={`flex-1 p-2 text-center font-bold text-lg ${
              activeTab === "registration" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleTabChange("registration")}
          >
            Registration
          </button>
        </div>
        <p className="text-center mb-4">მოგესალმებით! გთხოვთ, გაიაროთ ავტორიზაცია</p>
        
        {/* Authorization Form */}
        {activeTab === "authorization" && (
          <form className="mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Authorization
            </button>
          </form>
        )}

        {/* Registration Form */}
        {activeTab === "registration" && (
          <form className="mb-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                <input type="text" id="surname" name="surname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Phone Number</label>
                <div className="flex items-center">
                  <select id="countryCode" name="countryCode" className="mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="+995">+995</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input type="text" id="phone" name="phone" className="mt-1 flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        )}

        <p className="text-sm text-gray-600">
          {activeTab === "registration" ? "გაქვთ ანგარიში?" : "არ გაქვს ანგარიში?"}{" "}
          <button
            className="text-indigo-600 hover:underline focus:outline-none"
            onClick={() => handleTabChange(activeTab === "registration" ? "authorization" : "registration")}
          >
            {activeTab === "registration" ? "Authorization here" : "Registration here"}
          </button>
        </p>
      </div>
    </div>
  );
}
