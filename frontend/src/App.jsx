import "./index.css";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import Rooms from "./pages/Rooms";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import SimpleSlider from "./components/SimpleSlider";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManagerooms from "./pages/AdminManagerooms";
import AdminReservation from "./pages/AdminReservation";
import AdminReviews from "./pages/AdminReviews";


function App() {
  return (
    <>
      <Router>
        <Header />
        <SimpleSlider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AdminManagerooms" element={<AdminManagerooms />} />
          <Route path="/AdminReservation" element={<AdminReservation />} />
          <Route path="/AdminReviews" element={<AdminReviews />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
