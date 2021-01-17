import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers/getHeroeById';
import HeroeDetail from '../components/heroe/HeroeDetail';
const HeroePage = ({history}) => {
    
    // Hook en el cual ves los parametros enviados del url
    const params = useParams();
    const {id} = params;
    const heroe = getHeroeById(id);

    // Desmontar Menu Toggle
    const unmountMenu = () => {
        document.getElementById("site-nav").classList.remove("site-nav-open");
        document.getElementById("menu-toggle").classList.remove("menu-open");
    }

    if (!heroe) 
    {
        return (<Redirect to='/' />);
    }
    else 
    {
        return (
            <div className='content animated fadeIn' onClick={unmountMenu}>
                <h1>{heroe.superhero}</h1>
                <hr />
                <HeroeDetail heroe={heroe}
                             history={history}/>
            </div>
        )
    }     
}

export default HeroePage;