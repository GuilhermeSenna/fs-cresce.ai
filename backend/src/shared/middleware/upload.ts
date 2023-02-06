/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable consistent-return */
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { AppError } from '@shared/error/AppError';

const DIR = process.env.NODE_ENV === 'development' ? 'src/temp/' : 'dist/temp';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName);
    },
});

const storageImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, `${uuidv4()}-${String(fileName)}`);
    },
});

const storageCnh = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, `cnh_${uuidv4()}-${String(fileName)}`);
    },
});

export const uploadCnh = multer({
    storage: storageCnh,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        ) {
            cb(null, true);
            return;
        }

        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    },
});

export const uploadImage = multer({
    storage: storageImage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        ) {
            cb(null, true);
            return;
        }

        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    },
});

export const uploadPdf = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/octet-stream'
        ) {
            cb(null, true);
            return file.originalname;
        }
        cb(null, false);
        return cb(new Error('Only .pdf format allowed!'));
    },
});
