import React from "react";
import Header from "../components/Header";
import SimpleSlider from "../components/SimpleSlider";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <SimpleSlider />
      <Outlet />
      <Footer />
    </div>
  );
}
