import { IRegisterUserDTO } from '@modules/pokemons/dtos/IRegisterPokemonDTO';
import { Pokemon } from '@modules/pokemons/infra/entities/Pokemon';

import { IFindByNameDTO } from '../dtos/IFindByNameDTO';
import { IFindByIdDTO } from '../dtos/IFindByIdDTO';

interface IPokemonRepository {
    list(): Promise<Pokemon[]>;
    findByName({ name }: IFindByNameDTO): Promise<Pokemon | null>;
    findById({ id }: IFindByIdDTO): Promise<Pokemon | null>;
}

export { IPokemonRepository };
