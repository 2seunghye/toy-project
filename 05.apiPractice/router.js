import express from 'express';
import routes from './routes';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('user index'));
userRouter.get('/edit', (req, res) => res.send('user edit'));
userRouter.get('/password', (req, res) => res.send('user password'));
