import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Navigation() {
    return (
      <header className="text-gray-600 body-font shadow-xl p-3">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/article'} className="mr-5 hover:text-gray-900">Article</Link>
          <Link to={'/chat'} className="mr-5 hover:text-gray-900">Discusion</Link>
          <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
        </nav>
       <Logout/>
      </div>
    </header>
    )
}

export default Navigation;
