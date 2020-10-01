import express from 'express';
import speechController from './speech.controller';


export const speechRouter = express.Router();
speechRouter.route('/addspeech').post(speechController.index);


