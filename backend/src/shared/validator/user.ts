import { Joi, Segments } from 'celebrate';

import { customMessages } from '../../utils/error';

// const registerUserValidator = {
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required().max(255).messages(customMessages('name')),
//         email: Joi.string()
//             .email()
//             .required()
//             .max(255)
//             .messages(customMessages('email')),
//         password: Joi.string()
//             .required()
//             .min(7)
//             .max(255)
//             .messages(customMessages('password')),
//         phone: Joi.string().max(11).messages(customMessages('phone')),
//         cnpj: Joi.string().max(14).messages(customMessages('CNPJ')),
//         user_type: Joi.string()
//             .valid('PASSAGEIRO', 'MOTORISTA', 'TRANSPORTADOR')
//             .messages(customMessages('Tipo do usuário')),
//         birth_date: Joi.string()
//             .required()
//             .isoDate()
//             .messages(customMessages('birth date')),
//     }),
// };

const registerPassengerValidator = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().max(255).messages(customMessages('name')),
        email: Joi.string()
            .email()
            .required()
            .max(255)
            .messages(customMessages('email')),
        password: Joi.string()
            .required()
            .min(7)
            .max(255)
            .messages(customMessages('password')),
        phone: Joi.string().max(11).messages(customMessages('phone')),
        cnpj: Joi.string().max(14).messages(customMessages('CNPJ')),
        user_type: Joi.string()
            .valid('PASSAGEIRO', 'MOTORISTA', 'TRANSPORTADOR')
            .messages(customMessages('Tipo do usuário')),
        birth_date: Joi.string()
            .required()
            .isoDate()
            .messages(customMessages('birth date')),
    }),
};

const loginUserValidator = {
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
            .email()
            .required()
            .max(255)
            .messages(customMessages('email')),
        password: Joi.string()
            .required()
            .min(7)
            .max(255)
            .messages(customMessages('password')),
    }),
};

export { registerPassengerValidator, loginUserValidator };
