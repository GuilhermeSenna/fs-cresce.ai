import * as dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
    jwt: {
        secret: String(process.env.JWT_SECRET),
        expiresIn: '15m',
    },
};
