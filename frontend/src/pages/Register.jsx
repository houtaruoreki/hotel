import React from "react";
import { Link } from "react-router-dom";
import Background from "/Images/image 8.png";
import Logo from "/Images/image 7.png";

export default function Register() {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto">
          <div className="text-center mb-6">
            <Link to="/">
              <img src={Logo} alt="Logo" className="mx-auto mb-4" />
            </Link>
            <h1 className="text-2xl font-semibold">ავტორიზაცია</h1>
            <p className="text-gray-600">მოგესალმებით გთხოვთ, გაიაროთ ავტორიზაცია</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">სახელი</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ სახელი"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">გვარი</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ გვარი"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ელ. ფოსტა</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ ელ. ფოსტა"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ტელეფონის ნომერი</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="(+995) 123 456 789"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">პაროლი</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ პაროლი"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">გაიმეორეთ პაროლი</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="გაიმეორეთ პაროლი"
              />
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              რეგისტრაცია
            </button>
            <p className="text-center text-gray-600 mt-4">
              გაქვთ ანგარიში? <Link to="/login" className="text-green-500">ავტორიზაცია</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
