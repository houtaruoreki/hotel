import React, { useState } from "react";

export default function AboutUs() {
  const [rating, setRating] = useState(0); // State to hold the rating

  // Function to handle clicking on a star to set the rating
  const handleRating = (value) => {
    setRating(value);
  };

  // Sample user profiles data
  const userProfiles = [
    {
      id: 1,
      name: "John Doe",
      photoUrl: "https://via.placeholder.com/150", // Example photo URL
      rating: 4,
      impression: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      id: 2,
      name: "Jane Smith",
      photoUrl: "https://via.placeholder.com/150", // Example photo URL
      rating: 5,
      impression: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    // Add more user profiles as needed
  ];

  return (
    <div className="bg-green-200 p-8">
      <h1 className="text-2xl font-bold text-center mb-4">About Us</h1>

      {/* Our Story */}
      <div className="mb-8 flex">
        <div className="w-1/2 mr-4">
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        {/* Photo Section for Our Story */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/600x500"
            alt="Service Image"
            className="mx-auto my-4"
          />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mb-8 flex">
        {/* Photo for Mission and Vision */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/600x500"
            alt="Service Image"
            className="mx-auto my-4"
          />
        </div>
        <div className="w-1/2 ml-4">
          <h2 className="text-xl font-semibold mb-2">Mission and Vision</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>

      {/* Team Members/Founder */}
      <div className="mb-8 flex">
        <div className="w-1/2 mr-4">
          <h2 className="text-xl font-semibold mb-2">Team Members/Founder</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        {/* Photo Section for Team Members/Founder */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/600x500"
            alt="Service Image"
            className="mx-auto my-4"
          />
        </div>
      </div>

      {/* Customer Impressions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Customer Impressions</h2>
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`text-2xl cursor-pointer ${
                value <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => handleRating(value)}
            >
              ★
            </span>
          ))}
        </div>
        {userProfiles.map((profile) => (
          <div key={profile.id} className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="font-semibold">{profile.name}</p>
            </div>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`text-2xl mr-1 ${
                    value <= profile.rating ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p>{profile.impression}</p>
          </div>
        ))}
      </div>
    </div>
  );
}