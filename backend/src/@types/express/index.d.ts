declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
        user?: TUserPayload;
    }
}

type TUserPayload = {
    id: number;
    email: string;
};
