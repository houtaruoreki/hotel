import "./index.css";
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
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
