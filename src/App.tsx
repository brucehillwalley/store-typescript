import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavouritesPage from "./pages/FavouritesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-500 min-h-screen text-center">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favorites" element={<FavouritesPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
