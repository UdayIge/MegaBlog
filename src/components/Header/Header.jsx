import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { Container, Logo } from '../index';
import LogoutButton from './LogoutButton'
import { useState } from 'react';
import { Button, Logo } from '..';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector(state => state.auth.status);
  const navItems = [
    {
      name: 'Home',
      slug: "",
      active: true,
      className: ""
    },
    {
      name: "All Posts",
      slug: "all-posts",
      active: authStatus,
      className: ""
    },
    {
      name: "Add Post",
      slug: "add-post",
      active: authStatus,
      className: ""
    },
  ]
  return (
    <header className='w-full shadow bg-gray-500 fixed top-0 z-10'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo width='35px' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:dark:hover:text-blue-700">MegaBlog</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <NavLink
                      to={`/${item.slug}`}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-sm md:p-0 ${isActive ? !menuOpen ? "text-blue-700" : 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ) : null)}
              {authStatus && (
                <li>
                  <LogoutButton className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-red-600 md:hover:bg-transparent md:border-0 md:bg-blue-700 md:hover:text-blue-700 md:px-4 md:rounded-2xl md:py-1 dark:text-white dark:hover:bg-red-700 dark:hover:text-white ' />
                </li>
              )}
              {!authStatus && (
                <>
                  <Button className='text-white bg-blue-700 rounded-2xl md:hover:bg-transparent md:border-0 md:bg-blue-700 md:hover:text-blue-700 md:px-4 md:rounded-2xl md:py-1 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white'>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button bgColor='bg-blue-700' className='text-white rounded-2xl md:hover:bg-transparent md:border-0 md:bg-blue-700 md:hover:text-blue-700 md:px-4 md:rounded-2xl md:py-1 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white'>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>)}
            </ul>
          </div>
        </div>


        {/* <div className='mr-4'>
            <Link to={'/'}>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full mr-2 text-white font-semibold'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null)}

            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul> */}
      </nav>

    </header>
  )
}


export const Header2 = () => {
  return (


    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" class="h-8" alt=" Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default Header;
