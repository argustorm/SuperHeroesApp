import React from 'react';
import { Link } from 'react-router-dom';
import { cambiarClase } from './app';

const NavbarComponent = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h1 className="logo"><span></span></h1>
                </div>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <Link to='/marvel' className='link'>
                            <li>
                                <span>
                                    <i>Marvel</i>
                                </span>
                            </li>
                        </Link>
                        <Link to='/dc' className='link'>
                            <li>
                                <span>
                                    <i>DC</i>
                                </span>
                            </li>
                        </Link>
                        <Link to='/search' className='link'>
                            <li>
                                <span>
                                    <i>Search</i>
                                </span>
                            </li>
                        </Link>
                        <Link to='/login' className='link'>
                            <li>
                                <span>
                                    <i>Logout</i>
                                </span>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={cambiarClase}>
                    <div className="hamburger">

                    </div>
                </div>
            </header>
            <script src="./app.js"></script>
        </div>
    );
}

export default NavbarComponent;