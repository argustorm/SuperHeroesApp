import React from 'react'

const HeroeDetail = ({heroe, history}) => {
    const {
        alter_ego,
        characters,
        first_appearance,
        id,
        publisher,
        superhero
    } = heroe;

    const {goBack} = history;

    const handleGoBack = () => {
        goBack();
    }

    return (
        <div className='detail-flex animated fadeIn'>
            <div className='div-img-detail'>
                <img
                    alt={superhero}
                    className='img-detail'
                    src={`../assets/heroes/${id}.jpg`}
                />
            </div>
            <div>
                <p><b>Alter Ego: {alter_ego}</b></p>
                <p><b>Characters: {characters}</b></p>
                <p><b>First Appearence: {first_appearance}</b></p>
                {
                    (publisher === "DC Comics")
                        ? 
                        <img
                            alt={superhero}
                            src="../assets/logos/dc-logo.png"
                            className='logo-dc'
                        />
                        :
                        <img
                            alt={superhero}
                            src="../assets/logos/marvel-logo.png"
                            className='logo-marvel'
                        />
                }
                <button className='btn-danger'
                        onClick={handleGoBack}>
                    Go back
                </button>
            </div>
        </div>
    )
}

export default HeroeDetail;
