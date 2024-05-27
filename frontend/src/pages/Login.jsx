import React from "react"
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Background from "/Images/image 8.png";
import Logo from "/Images/image 7.png";
export default function Login() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border border-mwvane ">
          <div className="text-center mb-6">
            <Link to="/">
            <img src={Logo} alt="Logo" className="mx-auto mb-4" />
            </Link>
            
            <h1 className="text-2xl font-semibold">ავტორიზაცია</h1>
            <p className="text-gray-600">მოგესალმებით გთხოვთ, გაიაროთ ავტორიზაცია</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">ელ. ფოსტა</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ ელ. ფოსტა"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">პაროლი</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ პაროლი"
              />
            </div>
            <button className="w-full bg-green-300 text-green-600 font-bold py-2 rounded-lg hover:bg-green-400 hover:text-green-800">
              ავტორიზაცია
            </button>
            <p className="text-center text-gray-600 mt-4">
              არ გაქვთ ანგარიში? <a href="/register" className="text-green-500">რეგისტრაცია</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
