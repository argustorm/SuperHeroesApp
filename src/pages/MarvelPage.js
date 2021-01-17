import React from 'react';
import MarvelHeroes from '../components/heroes/MarvelHeroes';

const MarvelPage = ({history}) => {

    // Desmontar Menu Toggle
    const unmountMenu = () => {
        document.getElementById("site-nav").classList.remove("site-nav-open");
        document.getElementById("menu-toggle").classList.remove("menu-open");
    }

    return (
        <div className='content animated fadeIn' onClick={unmountMenu}>
            <img alt="Marvel" src="assets/logos/marvel-logo.png" className='logo-marvel'/>
            <hr />
            <MarvelHeroes history={history}/>
        </div>
    )
}

export default MarvelPage;