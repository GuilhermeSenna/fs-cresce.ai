import { Request, Response } from 'express';
import Logger from 'shared/logger';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
    async handle(_req: Request, res: Response): Promise<Response> {
        Logger.info('Entrou no método handle dentro do ListUserController');

        const listUsers = container.resolve(ListUsersUseCase);

        Logger.info('Invocou o método execute dentro do ListUserController');
        const list = await listUsers.execute();

        return res.status(200).send(list);
    }
}

export { ListUsersController };
