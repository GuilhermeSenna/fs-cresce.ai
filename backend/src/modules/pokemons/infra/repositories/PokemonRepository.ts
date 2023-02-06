import { hash } from 'bcryptjs';

import { IFindByIdDTO } from '@modules/pokemons/dtos/IFindByIdDTO';
import { IFindByNameDTO } from '@modules/pokemons/dtos/IFindByNameDTO';
import { IRegisterUserDTO } from '@modules/pokemons/dtos/IRegisterPokemonDTO';

import prismaClient from '../../../../shared/infra/prisma/prismaClient';
import Logger from '../../../../shared/logger';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonRepository } from '@modules/pokemons/repositories/IPokemonRepository';

class PokemonRepository implements IPokemonRepository {
    async list(): Promise<Pokemon[]> {
        Logger.info('Entrou no método list no PokemonRepository');

        const pokemons = await prismaClient.pokemon.findMany();

        return pokemons as Pokemon[];
    }
    findByName({ name }: IFindByNameDTO): Promise<Pokemon | null> {
        throw new Error('Method not implemented.');
    }
    findById({ id }: IFindByIdDTO): Promise<Pokemon | null> {
        throw new Error('Method not implemented.');
    }
}

export { PokemonRepository };
