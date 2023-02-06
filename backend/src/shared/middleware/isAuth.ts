import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../error/AppError';
import Logger from '../logger';

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    Logger.info(`Attempt to access protected route - '${req.baseUrl}'`);
    const { authorization } = req.headers;

    if (!authorization) {
        Logger.warn('Missing credentials!');
        throw new AppError('Un-Authorized', 401);
    }

    try {
        // Remove 'Bearer'
        const token = authorization.split(' ')[1];

        // verify token
        const payload = verify(token, String(process.env.JWT_SECRET));
        req.user = payload as TUserPayload;
    } catch (err) {
        Logger.warn('Invalid credentials!');
        // if (err instanceof Error && err.name === 'TokenExpiredError') {
        //     throw new AppError(err.name, 401);
        // }

        throw new AppError('token.invalid', 401);
    }

    return next();
}
