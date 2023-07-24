import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http//localhost:5173',
    methods: ['GET', 'POST'],
  },
});

let port = 3000;

server.listen(port, () => {
  console.log(`Server is running ${port}`);
});
