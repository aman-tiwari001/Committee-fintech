const NavBar = () => {
  return (
    <nav className='flex flex-row w-screen px-10 py-4 bg-red-500'>
      <div className='flex flex-row gap-3 items-center'>
        <img src='/logo.png' alt='Committee_Logo' width={60} />
        <div>
          <h3>COMMITTEE</h3>
          <p>Lend | Borrow | Invest</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
