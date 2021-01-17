import { heroesData } from "../data/heroesData"

export const getHeroeById = (id = '') => {
    return heroesData.find((heroe) => heroe.id === id);
}