import React from 'react';
import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';
import HeroesListCard from './HeroesListCard';

const DCHeroes = ({history}) => {

    const dc_heroes = getHeroesByPublisher('DC Comics');
    
    return (
        <div className='body-cards'>
            <div className='wrapper'>
                {
                    dc_heroes.map((heroe) => {
                        return (
                            <HeroesListCard
                                key={heroe.id}
                                heroe={heroe}
                                history={history}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default DCHeroes;