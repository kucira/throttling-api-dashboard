import express from 'express';
import morgan from 'morgan';

import Home from './routes/home';
import { handleLimiter } from './middlewares/limiter';
// import { handleCache } from './middlewares/cache';

const app = express();
app.use(morgan('combined'));
app.use(express.json());

app.use(handleLimiter);
// app.use(handleCache);

app.use(Home);

export default app;
