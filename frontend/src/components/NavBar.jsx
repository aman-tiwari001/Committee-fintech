import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <Link to='/'>Home</Link>
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            <Link to='/'>Account</Link>
          </li>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white'>
            <Link to='/'>Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
