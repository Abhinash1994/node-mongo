import express from 'express';
import { userRouter } from './resources/user';
import { speechRouter } from './resources/speech';


export const restRouter = express.Router();
restRouter.use('/user', userRouter);
restRouter.use('/speech', speechRouter);





