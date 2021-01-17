import React from 'react';
import DCHeroes from '../components/heroes/DCHeroes';

const DCPage = ({ history }) => {

    const unmountMenu = () => {
        document.getElementById("site-nav").classList.remove("site-nav-open");
        document.getElementById("menu-toggle").classList.remove("menu-open");
    }

    return (
        <div className='content animated fadeIn' onClick={unmountMenu}>
            <img alt="DC" src="assets/logos/dc-logo.png" className='logo-dc'/>
            <hr />
            <DCHeroes history={history} />
        </div>
    )
}

export default DCPage;