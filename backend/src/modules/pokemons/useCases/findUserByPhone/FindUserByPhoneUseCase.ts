import { inject, injectable } from 'tsyringe';

import { IFindByPhoneDTO } from '@modules/users/dtos/IFindByPhoneDTO';
import { User } from '@modules/users/infra/entities/User';
import { AppError } from '@shared/error/AppError';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class FindUserByPhoneUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute({ phone }: IFindByPhoneDTO): Promise<User> {
        const findUser = await this.userRepository.findByPhone({ phone });

        if (!findUser)
            throw new AppError('There is no User with this phone', 404);

        return findUser;
    }
}

export { FindUserByPhoneUseCase };
