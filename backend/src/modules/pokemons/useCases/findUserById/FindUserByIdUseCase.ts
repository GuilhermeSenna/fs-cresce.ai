import { inject, injectable } from 'tsyringe';

import { IFindByIdDTO } from '@modules/users/dtos/IFindByIdDTO';
import { User } from '@modules/users/infra/entities/User';
import { AppError } from '@shared/error/AppError';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class FindUserByIdUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute({ id }: IFindByIdDTO): Promise<User> {
        const findUser = await this.userRepository.findById({ id });

        if (!findUser) throw new AppError('There is no User with this ID', 404);

        return findUser;
    }
}

export { FindUserByIdUseCase };
