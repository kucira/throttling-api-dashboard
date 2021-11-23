import express, { Router, Request, Response } from 'express';

const Home: Router = express.Router();
Home.get('/', (req: Request, res: Response) =>
  res.status(200).json({
    message: 'Success',
  }),
);

Home.get('/init', (req: Request, res: Response) =>
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
