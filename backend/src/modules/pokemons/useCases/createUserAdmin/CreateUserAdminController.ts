import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IRegisterUserDTO } from '@modules/users/dtos/IRegisterUserDTO';
import Logger from '@shared/logger';

import { CreateUserAdminUseCase } from './CreateUserAdminUseCase';

class CreateUserAdminController {
    async handle(): Promise<void> {
        Logger.info('Entrou no handle do createUserAdminController');
        const createUserAdminUseCase = container.resolve(
            CreateUserAdminUseCase,
        );

        await createUserAdminUseCase.execute();

        // return res.status(201).json({ token });
    }
}

export { CreateUserAdminController };
