import catAvatar from '../../assets/cat-avatar.svg';

const Navbar = () => {
  return (
    <nav className='border-gray-200 px-2 sm:px-4 py-4 bg-gray-800'>
      <div className='container flex flex-wrap justify-center items-center mx-auto'>
        <a href='/#' className='flex items-center'>
          <img
            src={catAvatar}
            className='mr-3 h-12 sm:h-12'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
            Gatita Sexy SO
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
