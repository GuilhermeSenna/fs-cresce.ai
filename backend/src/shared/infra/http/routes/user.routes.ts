import { celebrate } from 'celebrate';
import { Router } from 'express';

import { FindUserByEmailController } from '@modules/pokemons/useCases/findUserByEmail/FindUserByEmailController';
import { FindUserByIdController } from '@modules/pokemons/useCases/findUserById/FindUserByIdController';
import { FindUserByPhoneController } from '@modules/pokemons/useCases/findUserByPhone/FindUserByPhoneController';
import { ListUsersController } from '@modules/pokemons/useCases/listUsers/ListUsersController';
import { RegisterUserController } from '@modules/pokemons/useCases/registerUser/RegisterUserController';
import { uploadCnh } from '@shared/middleware/upload';

import { isAuthenticated } from '../../../middleware/isAuth';
import {
    loginUserValidator,
    registerPassengerValidator,
} from '../../../validator';

const registerUser = new RegisterUserController();
const listUsers = new ListUsersController();
const findUserByEmail = new FindUserByEmailController();
const findUserByPhone = new FindUserByPhoneController();
const findUserById = new FindUserByIdController();
const userRoutes = Router();

userRoutes.get('/', isAuthenticated, listUsers.handle);
userRoutes.get('/id', isAuthenticated, findUserById.handle);
userRoutes.get('/email', isAuthenticated, findUserByEmail.handle);
userRoutes.get('/phone', isAuthenticated, findUserByPhone.handle);

userRoutes.post(
    '/register-user',
    // celebrate(registerUserValidator),
    registerUser.handle,
);

export { userRoutes };
