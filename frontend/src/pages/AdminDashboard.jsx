import React from "react";
import AdminPageSelector from "../components/AdminPageSelector";

const AdminDashboard = () => {
  // Sample data for booking details
  const bookingData = [
    { day: "ორშ", bookings: 5 },
    { day: "სამ", bookings: 8 },
    { day: "ოთხ", bookings: 3 },
    { day: "ხუთ", bookings: 6 },
    { day: "პარ", bookings: 9 },
    { day: "შაბ", bookings: 7 },
    { day: "კვირ", bookings: 4 }
  ];

  // Sample data for payment details
  const paymentData = [
    { name: "გადახდილი", value: 400, color: "#0088FE" },
    { name: "გადაუხდელი", value: 200, color: "#00C49F" },
    { name: "პრომო კოდი", value: 100, color: "#FFBB28" },
    { name: "ბარათით გადახდა", value: 300, color: "#FF8042" }
  ];

  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-1/4 p-4">
        <AdminPageSelector />
      </div>

      {/* Right side */}
      <div className="w-3/4 p-4">
        {/* Your existing content goes here */}
        <div className="bg-white p-8">
          <div className="border-2 border-gray-300 rounded-lg shadow-xl p-6 mb-8">
            <h1 className="text-3xl font-bold text-center mb-8">ინფორმაციული დაფა</h1>
            
 {/* Inventory Details */}
 <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">ჯავშნის დეტალები</h2>
          <div className="flex mb-4">
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">დაჯავშნა: <span className="font-bold mr-2">10</span> <span>👥</span></p>
            </div>
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">სემოსვლა: <span className="font-bold mr-2">5</span> <span>👥</span></p>
            </div>
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">გასვლა: <span className="font-bold mr-2">2</span> <span>👥</span></p>
            </div>
            <div className="w-1/4 flex items-center">
              <p className="mb-2">რჩება: <span className="font-bold mr-2">3</span> <span>👥</span></p>
            </div>
          </div>
        </div>

        {/* Rooms Management */}
        <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">ოთახების მართვა</h2>
          <div className="flex mb-4">
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">ოთახები: <span className="font-bold mr-2">20</span> <span>🏘️</span></p>
            </div>
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">თავისუფალი: <span className="font-bold mr-2">10</span> <span>🔓</span></p>
            </div>
            <div className="w-1/4 mr-4 flex items-center">
              <p className="mb-2">დაკავებული: <span className="font-bold mr-2">8</span> <span>🔒</span></p>
            </div>
            <div className="w-1/4 flex items-center">
              <p className="mb-2">არ არის მზად: <span className="font-bold mr-2">2</span> <span>⏳</span></p>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">ჯავსნის დეტალები</h2>
          <div className="flex">
            {bookingData.map((item, index) => (
              <div key={index} className="w-1/7 mr-4">
                <div className="text-center">
                  <p className="font-bold mb-2">{item.day}</p>
                  <div className="h-24 bg-gray-300 relative">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${item.bookings * 10}px` }}
                    ></div>
                    <p className="absolute bottom-0 left-0 right-0 text-xs text-center">
                      {item.bookings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details */}
        <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-4">გადახდის მეთოდი</h2>
          <div className="flex justify-center">
            <div className="w-1/2">
              {paymentData.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <p>{item.name}</p>
                  <p className="ml-auto">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
        {/* End of existing content */}
      </div>
    </div>
  );
}

export default AdminDashboard;
