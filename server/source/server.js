import express from 'express';
import http from 'http';
import path from 'path';
import socketIo from 'socket.io'
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import apiRouter from './routes/api';
import Actions from './helpers/actions';

const app = express();
const logger = morgan('dev');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);
app.use(session({
  secret: 's3cr3t',
  cookie: {}
}));

app.use(express.static(path.join(__dirname, '../../client')));

app.use(apiRouter);

app.use('*', (res, req) => {
  res.status(404).send('Page Not Found')
})

app.use((err, req, res, /* next */) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

const server = http.createServer(app)

const io = socketIo(server);

io.on('connection', socket => {
  console.log('a client connected');
  socket.on('disconnect', () => console.log('client disconnected'));
  socket.on(Actions.MESSAGE_POSTED, (data) => io.sockets.emit(Actions.MESSAGE_POSTED, data));
  socket.on(Actions.GROUP_DELETED, (data) =>  io.sockets.emit(Actions.GROUP_DELETED, data));
  socket.on(Actions.GROUP_UPDATED, (data) => io.sockets.emit(Actions.GROUP_UPDATED, data));
  socket.on(Actions.USER_REMOVED, (data) => io.sockets.emit(Actions.USER_REMOVED, data));
  socket.on(Actions.USER_ADDED, (data) => io.sockets.emit(Actions.USER_ADDED, data));
});

export default server;
