import { inject, injectable } from 'tsyringe';

import { IFindByEmailDTO } from '@modules/users/dtos/IFindByEmailDTO';
import { User } from '@modules/users/infra/entities/User';
import { AppError } from '@shared/error/AppError';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class FindUserByEmailUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute({ email }: IFindByEmailDTO): Promise<User> {
        const findUser = await this.userRepository.findByEmail({ email });

        if (!findUser)
            throw new AppError('There is no User with this email', 404);

        return findUser;
    }
}

export { FindUserByEmailUseCase };
