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

import Header from "./components/Header";
import SimpleSlider from "./components/SimpleSlider";
import Footer from "./components/Footer";

function App() {
  // Get the current route path
  const currentRoute = window.location.pathname;

  // Check if the current route is an admin route
  const isAdminDashboard =
    currentRoute === "/admindashboard" ||
    currentRoute === "/adminmanagerooms" ||
    currentRoute === "/adminreservation" ||
    currentRoute === "/AdminDashboard" ||
    currentRoute === "/AdminManagerooms" ||
    currentRoute === "/AdminReservation" ||
    currentRoute === "/AdminReviews" ||
    currentRoute === "/adminreviews";

  return (
    <Router>
      {/* Conditionally render Header and SimpleSlider */}
      {!isAdminDashboard && (
        <>
          <Header />
          <SimpleSlider />
        </>
      )}

      {/* Routes */}
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
      </Routes>

      {/* Conditionally render Footer */}
      {!isAdminDashboard && <Footer />}
    </Router>
  );
}

export default App;
