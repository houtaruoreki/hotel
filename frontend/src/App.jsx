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
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
