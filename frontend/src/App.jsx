import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Rooms from "./pages/Rooms";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManagerooms from "./pages/AdminManagerooms";
import AdminReservation from "./pages/AdminReservation";
import AdminReviews from "./pages/AdminReviews";
import NotFound404 from "./pages/404";


function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminmanagerooms" element={<AdminManagerooms />} />
          <Route path="/adminreservation" element={<AdminReservation />} />
          <Route path="/adminreviews" element={<AdminReviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

function NotFound() {
  return (
    <div>
      <NotFound404></NotFound404>
    </div>
  );
}

export default App;