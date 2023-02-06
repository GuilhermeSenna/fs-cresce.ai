import { inject, injectable } from 'tsyringe';

import { User } from '@modules/users/infra/entities/User';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class ListUsersUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute(): Promise<User[]> {
        const result = await this.userRepository.list();
        return result;
    }
}

export { ListUsersUseCase };
