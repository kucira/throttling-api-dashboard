import express, { Router, Request, Response } from 'express';
import { handleLimiter } from '../middlewares/limiter';

const Home: Router = express.Router();
Home.get('/', handleLimiter, (req: Request, res: Response) =>
  res.status(200).json({
    data: [
      {
        id: '123445',
        name: 'hello world',
        address: 'Boom',
      },
    ],
    message: 'Success',
  }),
);

export default Home;
