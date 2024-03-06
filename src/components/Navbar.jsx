import React from "react";
import { useState } from "react";
import '../components/Navbar.css'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
       <form className="form" role="search">
        <input className="search" type="search" placeholder="Search"  value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
      </form>
    </div>
  );
};

export default Navbar;
