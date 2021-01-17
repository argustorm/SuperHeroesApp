import React from 'react';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import getHeroesByName from "../../helpers/getHeroesByName";
import HeroeListCard from "../heroes/HeroesListCard";

const SearchHeroe = ({ history, location }) => {

    // Query String
    const parsed = queryString.parse(location.search);
    const { q = '' } = parsed;

    // Le asigno el valor por defecto de mi querystring al name, que posteriormente será cambiado por el handleInputChange y finalmente modificado por el Submit
    const { state, handleInputChange } = useForm({
        name: q
    });
    const { name } = state;

    const filteredHeroes = getHeroesByName(name);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${name}`);
    }

    return (
        <div>
            <div>
                <form className='form' onSubmit={handleFormSubmit}>
                    <input
                        autoComplete='off'
                        className='input-form'
                        name='name'
                        placeholder='Hero name...'
                        type='text'
                        value={name}
                        required
                        onChange={handleInputChange}
                    />
                </form>
                {
                    (filteredHeroes === 0)
                        ?
                        <h5>No results</h5>
                        :
                        <div className='body-cards'>
                            <div className='wrapper'>
                                {
                                    filteredHeroes.map((heroe) => {
                                        return (
                                            <HeroeListCard
                                                key={heroe.id}
                                                heroe={heroe}
                                                history={history}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default SearchHeroe;