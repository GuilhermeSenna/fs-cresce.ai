import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Logger from '@shared/logger';

import { FindUserByPhoneUseCase } from './FindUserByPhoneUseCase';

class FindUserByPhoneController {
    async handle(req: Request, res: Response): Promise<Response> {
        Logger.info(
            'Entrou no método handle dentro do findUserByPhoneController',
        );

        const findUserByPhone = container.resolve(FindUserByPhoneUseCase);

        const { phone } = req.body;

        Logger.info(
            'Invocou o método execute dentro do findUserByPhoneController',
        );
        const findUser = await findUserByPhone.execute({ phone });

        return res.status(200).send(findUser);
    }
}

export { FindUserByPhoneController };
