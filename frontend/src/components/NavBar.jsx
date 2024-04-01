import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md flex justify-between items-center py-4 px-8">
      <div className="flex flex-row gap-3 items-center">
        <img src="/logo.png" alt="Committee_Logo" width={60} className="bg-black" />
        <div>
          <h3>COMMITTEE</h3>
          <p>Lend | Borrow | Invest</p>
        </div>
      </div>

      <ul className="flex space-x-8">
        <li>
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            How it Works
          </Link>
        </li>
        <li>
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Features
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Clients
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Categories
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>
        <li>
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="#" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
        </li>
        <li>
          <Link to="#"
            className="text-white px-5 py-2 rounded-3xl hover:text-blue-500 bg-black"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
