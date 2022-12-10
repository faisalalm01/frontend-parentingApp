import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header className="text-gray-600 body-font container">
        <div className="container mx-auto flex flex-wrap p-2 px-32 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">SMART <b className='text-blue-500'>FAMILY</b></span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="mr-5 hover:text-gray-900">Article</Link>
            <Link to={'/'} className="mr-5 hover:text-gray-900">Sharing</Link>
            <Link to={'/'} className="mr-5 hover:text-gray-900">Tentang</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    )
}

export default Navigation;
