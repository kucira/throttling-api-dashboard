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
        date: new Date().toISOString(),
      },
    ],
    message: 'Success',
  }),
);

Home.get('/users', (req: Request, res: Response) =>
  res.status(200).json({
    data: [
      {
        id: '123445',
        name: 'Joko',
        address: 'Kalimantan',
      },
    ],
    message: 'Success',
  }),
);

export default Home;
