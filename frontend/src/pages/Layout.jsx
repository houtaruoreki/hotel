import React from 'react';
import { Outlet } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cover from "/Images/cover.jpeg";

function Layout() {

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
