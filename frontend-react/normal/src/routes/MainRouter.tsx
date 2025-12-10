import {  Routes, Route } from "react-router-dom";
import  App  from "../App";
import HotelDetail from "../pages/HotelDetail";

function MainRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
      </Routes>
  );
}

export default MainRouter;
