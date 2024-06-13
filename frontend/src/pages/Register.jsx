import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "/Images/image 8.png";
import Logo from "/Images/image 7.png";


export default function Register() {
  const [formData, setFormData] = useState({
    confirm_password: "",
    password: "",
      email: "",
      number: "",
      username: "",
      first_name: "",
      last_name: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))
    // Check if any required fields are missing
    const requiredFields = ['first_name', 'last_name', 'email', 'number', 'password', 'confirm_password', 'username'];
    const missingFields = requiredFields.filter(field => !formData[field]);
  
    if (missingFields.length > 0) {
      setError(`The following fields are required: ${missingFields.join(', ')}`);
      return;
    }
  
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch("https://8df2-95-104-36-132.ngrok-free.app/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        console.log(response)
        throw new Error("Registration failed");
      }
      
      // Optionally handle the response data here (e.g., storing a token)
      navigate("/login"); // Redirect to login page on success
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      // style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto">
          <div className="text-center mb-6">
            <Link to="/">
              <img src={Logo} alt="Logo" className="mx-auto mb-4" />
            </Link>
            <h1 className="text-2xl font-semibold">რეგისტრაცია</h1>
            <p className="text-gray-600">მოგესალმებით გთხოვთ, გაიაროთ რეგისტრაცია</p>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">სახელი</label>
              <input
                type="text"
                name="first_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ სახელი"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">გვარი</label>
              <input
                type="text"
                name="last_name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ გვარი"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">username</label>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700">ელ. ფოსტა</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ ელ. ფოსტა"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ტელეფონის ნომერი</label>
              <input
                type="text"
                name="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="(+995) 123 456 789"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">პაროლი</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="შეიყვანეთ პაროლი"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">გაიმეორეთ პაროლი</label>
              <input
                type="password"
                name="confirm_password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="გაიმეორეთ პაროლი"
                value={formData.confirm_password}
                onChange={handleChange}
                required
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
