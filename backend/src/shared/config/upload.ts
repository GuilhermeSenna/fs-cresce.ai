/* eslint-disable @typescript-eslint/no-unsafe-return */
import multer from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads');

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = uuidv4();
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};

export { TMP_FOLDER, UPLOADS_FOLDER, MULTER };
