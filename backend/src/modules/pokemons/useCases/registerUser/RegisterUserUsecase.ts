/* eslint-disable no-useless-concat */
import fs from 'fs/promises';
import * as path from 'path';
import { inject, injectable } from 'tsyringe';

import { IRegisterDriverDTO } from '@modules/users/dtos/IRegisterDriverDTO';
import { User } from '@modules/users/infra/entities/User';
import { AppError } from '@shared/error/AppError';
import Logger from '@shared/logger';

import { IUserRepository } from '../../repositories/IPokemonRepository';

@injectable()
class RegisterUserUsecase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    async execute({
        email,
        password,
        name,
        phone,
        birth_date,
        company_name,
        company_fantasy_name,
        address_street,
        address_district,
        address_city,
        address_state,
        address_number,
        address_zip_code,
        address_complement,
        cnpj,
        avatar_image,
        cnh_image,
        user_type,
        associateId,
    }: IRegisterDriverDTO): Promise<User> {
        Logger.info('Entrou no método execute dentro do RegisterUserUsecase');

        Logger.info('Invocou o método register dentro do RegisterUserUsecase');
        const user = await this.userRepository.registerDriver({
            email,
            password,
            name,
            phone,
            birth_date,
            company_name,
            company_fantasy_name,
            address_street,
            address_district,
            address_city,
            address_state,
            address_number,
            address_zip_code,
            address_complement,
            cnpj,
            avatar_image,
            cnh_image,
            user_type,
            associateId,
        });

        if (!user) throw new AppError('Error registering user!', 400);

        return user;
    }
}

export { RegisterUserUsecase };
