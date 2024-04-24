import React, { useState } from "react";
import AdminPageSelector from "../components/AdminPageSelector";

export default function AdminReservation() {
  const [bookingDetails, setBookingDetails] = useState({
    bookingNumber: 123456,
    numberOfArrivals: 5,
    numberOfDepartures: 3,
    remainingQuantity: 2,
  });

  return (
    <div className="container mx-auto">
      <div className="flex">
        {/* Move AdminPageSelector to the left side */}
        <div className="w-1/4">
          <AdminPageSelector />
        </div>
        {/* Keep the rest of the content on the right side */}
        <div className="w-3/4">
          <div className="mt-8">
            {/* Booking Details Section */}
            <div className="border border-gray-300 rounded p-4 mb-4">
      <h1 className="text-2xl font-bold mt-4 mb-2">დაჯავშნა</h1>

              <h2 className="text-lg font-semibold mb-4 center">ჯავშნის დეტალები</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Booking Number */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookingNumber">
                    დაჯავშნა
                  </label>
                  <p>{bookingDetails.bookingNumber}</p>
                </div>
                {/* Number of Arrivals */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfArrivals">
                    შემოსვლა (👥)
                  </label>
                  <p>{bookingDetails.numberOfArrivals}</p>
                </div>
                {/* Number of Departures */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfDepartures">
                    გასვლა (👥)
                  </label>
                  <p>{bookingDetails.numberOfDepartures}</p>
                </div>
                {/* Remaining Quantity */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remainingQuantity">
                    რჩება (👥)
                  </label>
                  <p>{bookingDetails.remainingQuantity}</p>
                </div>
              </div>
            </div>

            {/* User Details Table */}
            <div className="border border-gray-300 rounded p-4">
              <h2 className="text-lg font-semibold mb-4">მომხმარებლის დეტალები</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-10 py-5">მომხმარებლის სახელი</th>
                    <th className="px-10 py-5">ელ.ფოსტა</th>
                    <th className="px-4 py-2">ტელ. ნომერი</th>
                    <th className="px-4 py-2">სტუმრების რაოდენობა</th>
                    <th className="px-4 py-2">შემოსვლის თარიღი</th>
                    <th className="px-4 py-2">გასვლის თარიღი</th>
                    <th className="px-4 py-2">კომენტარი</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-10 py-5 border-b">John Doe</td>
                    <td className="px-10 py-5 border-b">johndoe@example.com</td>
                    <td className="px-10 py-5 border-b">123-456-7890</td>
                    <td className="px-10 py-5 border-b">2</td>
                    <td className="px-10 py-5 border-b">2024-04-25</td>
                    <td className="px-10 py-5 border-b">2024-04-28</td>
                    <td className="px-10 py-5 border-b">Special dietary needs</td>
                  </tr>
                  {/* Add more rows for additional data */}
                  <tr>
                    <td className="px-4 py-2 border-b">Jane Smith</td>
                    <td className="px-4 py-2 border-b">janesmith@example.com</td>
                    <td className="px-4 py-2 border-b">987-654-3210</td>
                    <td className="px-4 py-2 border-b">4</td>
                    <td className="px-4 py-2 border-b">2024-05-10</td>
                    <td className="px-4 py-2 border-b">2024-05-15</td>
                    <td className="px-4 py-2 border-b">None</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Mike Johnson</td>
                    <td className="px-4 py-2 border-b">mikejohnson@example.com</td>
                    <td className="px-4 py-2 border-b">567-890-1234</td>
                    <td className="px-4 py-2 border-b">3</td>
                    <td className="px-4 py-2 border-b">2024-06-01</td>
                    <td className="px-4 py-2 border-b">2024-06-10</td>
                    <td className="px-4 py-2 border-b">Extra towels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Emily Brown</td>
                    <td className="px-4 py-2 border-b">emilybrown@example.com</td>
                    <td className="px-4 py-2 border-b">111-222-3333</td>
                    <td className="px-4 py-2 border-b">1</td>
                    <td className="px-4 py-2 border-b">2024-07-20</td>
                    <td className="px-4 py-2 border-b">2024-07-25</td>
                    <td className="px-4 py-2 border-b">Early check-in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Samuel Green</td>
                    <td className="px-4 py-2 border-b">samuelgreen@example.com</td>
                    <td className="px-4 py-2 border-b">444-555-6666</td>
                    <td className="px-4 py-2 border-b">2</td>
                    <td className="px-4 py-2 border-b">2024-08-10</td>
                    <td className="px-4 py-2 border-b">2024-08-15</td>
                    <td className="px-4 py-2 border-b">Late check-out</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
