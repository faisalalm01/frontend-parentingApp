import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Navigation() {
    return (
        <header className="sm:w-full md:w-full xl:w-full text-gray-600 body-font container shadow-xl bg-white p-5 w-full">
        <div className="container mx-auto flex flex-wrap p-2 px-32 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">SMART <b className='text-blue-500'>FAMILY</b></span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/article'} className="mr-5 hover:text-gray-900">Article</Link>
            <Link to={'/chat'} className="mr-5 hover:text-gray-900">Sharing</Link>
            <Link to={'/about'} className="mr-5 hover:text-gray-900">Tentang</Link>
          </nav>
         <Logout/>
        </div>
      </header>
    )
}

export default Navigation;
