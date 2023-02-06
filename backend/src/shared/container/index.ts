import { container } from 'tsyringe';

import { PokemonRepository } from '@modules/pokemons/infra/repositories/PokemonRepository';
import { IPokemonRepository } from '@modules/pokemons/repositories/IPokemonRepository';

import '@shared/container/providers';

container.registerSingleton<IPokemonRepository>(
    'PokemonRepository',
    PokemonRepository,
);
