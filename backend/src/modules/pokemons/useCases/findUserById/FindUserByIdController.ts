import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Logger from '@shared/logger';

import { FindUserByIdUseCase } from './FindUserByIdUseCase';

class FindUserByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        Logger.info('Entrou no método handle dentro do findUserByIdController');

        const findUserById = container.resolve(FindUserByIdUseCase);

        const { id } = req.body;

        Logger.info(
            'Invocou o método execute dentro do findUserByIdController',
        );
        const findUser = await findUserById.execute({ id });

        return res.status(200).send(findUser);
    }
}

export { FindUserByIdController };
