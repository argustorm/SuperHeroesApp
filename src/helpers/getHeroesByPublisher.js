import { heroesData } from '../data/heroesData';

const getHeroesByPublisher = (publisher = '') => {
    return heroesData.filter((heroe) => heroe.publisher === publisher);
}

export default getHeroesByPublisher;