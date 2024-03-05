import React from "react";
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div>
       <form className="form" role="search">
        <input className="search" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  );
};

export default Navbar;
