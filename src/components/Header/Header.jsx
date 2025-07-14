import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton'
import { useState } from 'react';
import { Button, Logo, DarkToogleBtn  } from '..';

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
    <header className='w-full shadow bg-gray-500 fixed top-0 z-50'>
      <nav className="bg-gray-50 text-slate-900 border-gray-200 dark:bg-gray-900">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo width='35px' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:dark:hover:text-blue-600">MegaBlog</span>
          </Link>
          <div className='flex items-center space-x-3 rtl:space-x-reverse md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <DarkToogleBtn />
          </div>
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
                <>
                  <LogoutButton className='inline w-fit md:hover:bg-blue-500 rounded-3xl mt-2 md:border-0 md:m-0' />
                </>
              )}
              {!authStatus && (
                <>
                  <Button className='inline w-fit  md:hover:bg-blue-500 rounded-3xl mt-2 md:border-0 md:m-0'>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className='inline w-fit md:hover:bg-blue-500 rounded-3xl mt-2 md:border-0 md:m-0'>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>)}
              <div className='hidden md:block'>
                <DarkToogleBtn />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
