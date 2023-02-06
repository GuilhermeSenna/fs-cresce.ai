import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';
import Logger from '@shared/logger';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class CreateUserAdminUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute(): Promise<void> {
        Logger.info(
            'Entrou no método execute dentro do createUserAdminUseCase',
        );

        Logger.info('Invocou o método create dentro do createUserAdminUseCase');

        await this.userRepository.createDefaultUser({
            email: process.env.ADMIN_EMAIL || '',
            password: process.env.ADMIN_PASSWORD || '',
            name: 'ADMIN',
            phone: '99999-9999',
            birth_date: new Date(),
        });
    }
}

export { CreateUserAdminUseCase };
