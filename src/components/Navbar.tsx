import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5  bg-gray-500 h-[50px] text-white">
      <h3 className="font-bold italic ">Bruce Store</h3>
      <div>
        <Link to="/" className="mr-5">Home</Link>   {/*? mr => margin right */}
      
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
