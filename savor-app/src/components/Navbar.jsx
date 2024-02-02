// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex">
        <li className="mr-4">Home</li>
        <li className="mr-4">Menu</li>
        <li className="mr-4">About</li>
        <li>Book Table</li>
      </ul>
    </nav>
  );
};

export default Navbar;
