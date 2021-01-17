import React from 'react';

const HeroesListCard = ({ heroe, history }) => {

    const {
        first_appearance,
        id,
        //publisher,
        superhero
    } = heroe

    const handleClickCard = () => {
        history.push(`/heroe/${id}`);
    }

    return (
        <div className='card animated fadeIn'>
            <img alt={superhero} src={`./assets/heroes/${id}.jpg`} />
            <div className='info'>
                <h2>{superhero}</h2>
                <p>{first_appearance}</p>
                <button className='btn-primary' 
                        style={{width:'100%'}}
                        onClick={handleClickCard}>
                    Show more..
                </button>
            </div>
        </div>
    )
}

export default HeroesListCard;