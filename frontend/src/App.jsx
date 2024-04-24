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

  // Define the list of known routes
  const knownRoutes = [
    "/",
    "/aboutus",
    "/reservation",
    "/rooms",
    "/service",
    "/gallery",
    "/contactus",
    "/register",
    "/admindashboard",
    "/adminmanagerooms",
    "/adminreservation",
    "/adminreviews",
  ];

  // Check if the current route is a known route
  const isKnownRoute = knownRoutes.includes(currentRoute);

  // Determine if the Header, SimpleSlider, and Footer should be rendered
  const shouldRenderLayout = isKnownRoute && !isAdminRoute(currentRoute);

  // Helper function to check if a route is an admin route
  function isAdminRoute(route) {
    return (
      route === "/admindashboard" ||
      route === "/adminmanagerooms" ||
      route === "/adminreservation" ||
      route === "/adminreviews"
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        {/* Conditionally render Header and SimpleSlider */}
        {shouldRenderLayout && (
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

          {/* Catch all undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/* Footer */}
      {shouldRenderLayout && <Footer />}
    </div>
  );
}

// NotFound component for displaying error message
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;
