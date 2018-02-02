import express from 'express';
import http from 'http';
import socketIo from 'socket.io'
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes/api';
import appInfo from './helpers/info';

const app = express();
const logger = morgan('dev');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);
app.use(session({
  secret: 's3cr3t',
  cookie: {}
}));

app.get('/', (req, res) => {
  res.json(appInfo);
});

app.use(router);

app.use((err, req, res, /* next */) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

const server = http.createServer(app)

const io = socketIo(server);

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('client disconnected'))
  socket.on('MESSAGE_POSTED', (data) => console.log(data))
});

export default server;
