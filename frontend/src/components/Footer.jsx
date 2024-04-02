// React component (Footer.jsx)
import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-black p-4 flex flex-col h-[300px] items-center justify-center absolute b-0 l-0 w-[100vw]">
      <div className=' w-[400px] flex justify-evenly m-auto text-blue-600'>
        <span className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200'><GrLinkedinOption/></span>
        <span className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200'><IoCall/></span>
        <span className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200'><IoMdMail/></span>
        <span className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200'><AiFillInstagram className='scale-125'/></span>
        <span className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200'><TbBrandGithubFilled className='scale-125'/></span>

      </div>
      <div className="text-center mb-10 text-white">
        <address>
          437 Fifth Avenue, #815, New Delhi , ND , 10016 <br />
          (855) 748-2422 <br />
          support@committee.com
        </address>
      </div>
    </footer>
  );
};

export default Footer;
