import express, { Router } from 'express';
import { handleLimiter } from '../middlewares/limiter';

const Home: Router = express.Router();
Home.get('/', handleLimiter, (req, res) => res.send('Express + TypeScript Server'));

export default Home;
