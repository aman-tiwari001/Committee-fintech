import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='flex flex-row w-screen px-10 py-4 bg-blue-700'>
      <div className='flex flex-row items-center justify-between w-[100%]'>
        <div className='text-white flex gap-3 items-center'>
          <img src='/logo.png' alt='Committee_Logo' width={60} className='' />
          <span>
            <h3>COMMITTEE</h3>
            <p>Lend | Borrow | Invest</p>
          </span>
        </div>
        <ul className='flex gap-8 text-white text-lg'>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            Home
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            Dashboard
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            Account
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            Support
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
