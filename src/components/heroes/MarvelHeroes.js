import React from 'react';
import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';
import HeroesListCard from './HeroesListCard';

const MarvelHeroes = ({history, location}) => {

    const marvel_heroes = getHeroesByPublisher('Marvel Comics');

    return (
        <div className='body-cards'>
            <div className='wrapper'>
                {
                    marvel_heroes.map((heroe) => {
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
    );
}

export default MarvelHeroes;