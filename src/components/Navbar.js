import { ArrowDownIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { Link, useLocation, useRoutes } from 'react-router-dom';

type Props = {};

const navigation = [{ name: 'Home', href: '/' }];

const Navbar = (props: Props) => {
  const [show, setShow] = React.useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.split('/').length > 3 &&
      location.pathname.split('/')[2] == 'projects'
    ) {
      setShow(false);
    }
  }, [location.pathname]);

  return (
    <div className='relative'>
      <button
        onClick={() => setShow(true)}
        className={`fixed top-0 inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 m-4 right-4 opacity-20 hover:opacity-100 ${
          show
            ? 'transition-opacity ease-in-out duration-300 opacity-0'
            : 'transition-opacity ease-in-out duration-300 opacity-100'
        }`}
      >
        Show Menu
      </button>
      <header
        className={`fixed top-0 w-full opacity-100 bg-blue-600
          ${
            show
              ? 'transition ease-in delay-150 translate-y-0 duration-100 opacity-100'
              : 'transition ease-in delay-150 -translate-y-full duration-150 opacity-0'
          }`}
      >
        <nav
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          aria-label='Top'
        >
          <div className='w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none'>
            <div className='flex items-center'>
              <Link to='/'>
                <span className='sr-only'>Future Sphere Projects</span>
                <img
                  className='h-10 w-auto'
                  src='https://res.cloudinary.com/dtgh01qqo/image/upload/v1571287441/FutureSphere/fslogo.png'
                  alt='logo'
                />
              </Link>
              <Link to='/'>
                <span className='text-lg font-medium text-white ml-4'>
                  Project Demo
                </span>
              </Link>
              <div className='hidden ml-10 space-x-8 lg:block'>
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='text-base font-medium text-white hover:text-blue-50'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='ml-10 space-x-4'>
              <button
                onClick={() => setShow(false)}
                className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50'
              >
                Hide Menu
              </button>
            </div>
          </div>
          <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-base font-medium text-white hover:text-blue-50'
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
