import express from 'express';
import userController from './user.controller';
import auth from '../../../middleware/auth';

export const userRouter = express.Router();
userRouter.route('/getUserByEmailId').get( auth, userController.index);
// userRouter.route('/login').post(userController.login);
userRouter.route('/register').post(userController.register);
userRouter.route('/').get(userController.index);


