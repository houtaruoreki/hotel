import React, { useEffect, useState } from "react";

export default function RoomDetails({ roomId }) {
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        // Fetch room details when the component mounts
        fetch(`http://127.0.0.1:8000/rooms/${roomId}/`)
            .then(response => response.json())
            .then(data => setRoomDetails(data))
            .catch(error => console.error('Error fetching room details:', error));
    }, [roomId]); // Fetch data whenever roomId changes

    if (!roomDetails) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    return (
        <div>
            <h2>Room Details</h2>
            <p>Room ID: {roomDetails.id}</p>
            <p>Room Number: {roomDetails.number}</p>
            <p>Description: {roomDetails.description}</p>
            <p>Status: {roomDetails.status ? "Available" : "Occupied"}</p>
            <p>{roomDetails.is_cottage ? "Cottage" : "Not Cottage"}</p>
            {/* Add more details as needed */}
        </div>
    );
};
