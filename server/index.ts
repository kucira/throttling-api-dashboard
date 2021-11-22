import dotenv from 'dotenv';
import express from 'express';
import Home from './routes/home';

dotenv.config();
const server = express();

server.use(express.json());
server.use(Home);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

export default server;
