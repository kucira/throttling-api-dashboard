import express from 'express';
import morgan from 'morgan';

import Home from './routes/home';
import { handleLimiter } from './middlewares/limiter';

const app = express();
app.use(express.json());

app.use(handleLimiter);
app.use(morgan('combined'));

app.use(Home);

export default app;
