import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import Rooms from "./pages/Rooms";
import Reservation from "./pages/Reservation";
import Messages from "./pages/Messages";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="Rooms" element={<Rooms />} />
            <Route path="Reservation" element={<Reservation />} />
            <Route path="Messages" element={<Messages />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
