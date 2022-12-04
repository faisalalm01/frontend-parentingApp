import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className='Navigation'>
            <ul>
                <li className='navigation__logo'>
                    <Link to="/"> Smart Family </Link>
                </li>
                <li className='navigation__article'>
                    <Link to="/article"> Artikel </Link>
                </li>
                <li className='navigation__forum'>
                    <Link to="/forum"> Forum </Link>
                </li>
                <li className='navigation__consultation'>
                    <Link to="/consultation"> Konsultasi </Link>
                </li>
                <li className='navigation__about'>
                    <Link to="/about"> Tentang </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
