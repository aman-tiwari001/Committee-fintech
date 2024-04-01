// React component (Footer.jsx)
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-black p-4 flex flex-col md:flex-row md:justify-between">
      <div className="flex space-x-8 items-center mb-4 md:mb-0">
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Terms</a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-8">
        <ul>
          <li><a href="#" className="hover:text-gray-400">Quick Links</a></li>
          <li><a href="#" className="hover:text-gray-400">Sponsors</a></li>
          <li><a href="#" className="hover:text-gray-400">Properties</a></li>
          <li><a href="#" className="hover:text-gray-400">Deals</a></li>
        </ul>
        <ul>
          <li><a href="#" className="hover:text-gray-400">How It Works</a></li>
          <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-400">Training</a></li>
          <li><a href="#" className="hover:text-gray-400">Blog</a></li>
        </ul>
        <ul>
          <li><a href="#" className="hover:text-gray-400">Connect</a></li>
          <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-400">Why Sponsogram?</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <ul className="md:flex md:flex-col">
          <li><a href="#" className="hover:text-gray-400">Request Demo</a></li>
          <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-400">Agencies</a></li>
          <li><a href="#" className="hover:text-gray-400">Reports</a></li>
          <li><a href="#" className="hover:text-gray-400">Success Stories</a></li>
          <li><a href="#" className="hover:text-gray-400">Customers</a></li>
          <li><a href="#" className="hover:text-gray-400">Intellectual Property Policy</a></li>
        </ul>
      </div>
      <div className="mt-4 text-center md:mt-0">
        <address>
          437 Fifth Avenue, #815, New York, NY 10016 <br />
          (855) 748-2422 <br />
          support@sponsogram.com
        </address>
      </div>
    </footer>
  );
};

export default Footer;
