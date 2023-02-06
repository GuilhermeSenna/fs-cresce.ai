/* eslint-disable no-useless-concat */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IRegisterDriverDTO } from '@modules/users/dtos/IRegisterDriverDTO';
import { IRegisterUserDTO } from '@modules/users/dtos/IRegisterUserDTO';
import Logger from '@shared/logger';

import { RegisterUserUsecase } from './RegisterUserUsecase';

class RegisterUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        Logger.info('Entrou no handle do RegisterUserController');
        const registerUserUsecase = container.resolve(RegisterUserUsecase);
        const {
            name,
            email,
            password,
            phone,
            birth_date,
            user_type,
            address_street,
            address_district,
            address_city,
            address_state,
            address_number,
            address_zip_code,
            address_complement,
            company_name,
            company_fantasy_name,
            cnpj,
            avatar_image,
            associateId,
        }: IRegisterDriverDTO = req.body;

        const photo = req?.file?.filename;

        const user = await registerUserUsecase.execute({
            email,
            password,
            name,
            phone,
            birth_date,
            company_name,
            address_street,
            address_district,
            address_city,
            address_state,
            address_number,
            address_zip_code,
            address_complement,
            company_fantasy_name,
            cnpj,
            cnh_image: photo,
            avatar_image,
            user_type,
            associateId,
        });

        return res.status(201).json({ user });
    }
}

export { RegisterUserController };
