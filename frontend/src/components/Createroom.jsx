// React component (create room.jsx)
import React from 'react';
import Room from "../../public/room.png"
import { useNavigate } from 'react-router-dom';

const Createroom = () => {
  const navigate = useNavigate();
  return (
    <form className='flex flex-col  flex-shrink w-1/2 h-1/2 justify-center rounded-md shadow-lg m-10' onSubmit={() => navigate('/dashboard')}>
      <div className='flex justify-center p-10  ml-5 font-bold text-teal-900'>START A NEW ROOM</div>
      <div className='flex justify-center'><img src={Room} alt="" className="w-[100%] object-cover md:w-[50%] md:translate-x-[40px]" /></div>
      <div className='flex justify-center mb-10 '><input
        type="text"
        name="code"
        id="code"
        className=" block w-[200px]  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder="Enter a code "
        
      /></div>
      <div className='flex flex-row' >
        <div></div>
        <div></div> </div>
    </form>



  );
};

export default Createroom;
