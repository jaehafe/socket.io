import express, { Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './routers/authRouter';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
});

app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json('hi');
});

app.use('/auth', authRouter);

io.on('connect', (socket) => {});

server.listen(4000, () => {
  console.log('server listening on port 4000');
});
