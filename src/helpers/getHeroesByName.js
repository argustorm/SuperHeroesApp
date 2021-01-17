import { heroesData } from '../data/heroesData';

const getHeroesByName = (name = '') => {
    const heroe_name = name.toLocaleLowerCase();
    return heroesData.filter((heroe) => heroe.superhero.toLocaleLowerCase().includes(heroe_name));
}

export default getHeroesByName;