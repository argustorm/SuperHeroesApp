import React from 'react';
import SearchHeroe from '../components/search/SearchHeroe';

const SearchPage = ({history, location}) => {

    // Desmontar Menu Toggle
    const unmountMenu = () => {
        document.getElementById("site-nav").classList.remove("site-nav-open");
        document.getElementById("menu-toggle").classList.remove("menu-open");
    }

    return (
        <div className='content animated fadeIn' onClick={unmountMenu}>
            <h1>Search</h1>
            <hr />
            <SearchHeroe history={history} location={location} />
        </div>
    )
}

export default SearchPage;