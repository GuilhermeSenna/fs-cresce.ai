/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-concat */
import { CelebrateError } from 'celebrate';
import cors from 'cors';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import cron from 'node-cron';
import * as path from 'path';

import { CreateUserAdminController } from '@modules/users/useCases/createUserAdmin/CreateUserAdminController';
import 'express-async-errors';
import { isJsonString } from '@utils/general';

import { AppError } from '../../error/AppError';
import { router } from './routes';

import '../../container';

const port = process.env.PORT || 3001;

// const corsOptions = {
//     credentials: true,
//     // origin: '*',
//     origin: 'http://localhost:19000',
// };

const app = express();
// app.use(cors(corsOptions));
app.use(cors());
app.disable('x-powered-by');

app.use(express.json());
app.use(router);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: isJsonString(err.message)
                ? JSON.parse(err.message)
                : err.message,
        });
    }

    if (err instanceof CelebrateError) {
        const errorBody = err.details.get('body');
        return res.status(400).json({
            message: errorBody?.details[0].message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(port, async () => {
    console.log('Server is running at port', port);
});
