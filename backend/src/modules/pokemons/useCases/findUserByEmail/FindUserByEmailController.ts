import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Logger from '@shared/logger';

import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

class FindUserByEmailController {
    async handle(req: Request, res: Response): Promise<Response> {
        Logger.info(
            'Entrou no método handle dentro do findUserByEmailController',
        );

        const findUserByEmail = container.resolve(FindUserByEmailUseCase);

        const { email } = req.body;

        Logger.info(
            'Invocou o método execute dentro do findUserByEmailController',
        );
        const findUser = await findUserByEmail.execute({ email });

        return res.status(200).send(findUser);
    }
}

export { FindUserByEmailController };
