import express from 'express';
import bodyParser from 'body-parser';
import logger from 'bunyan-request-logger';
import apiRouter from './routes/api';

const app = express();
const router = express.Router();
const log = logger({
  name: 'PostIt'
});

const appInfo = {
  name: 'PostIt Server',
  version: '1.0.0',
  status: 'online',
  about: 'This application allows people create accounts, create groups and add registerd users to the groups, and the send messages out to these groups whenever they want.',
  author: 'Babakolo Usman Suleiman',
  contact: 'https://github.com/usmansbk',
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(log.requestLogger());

router.get('/', (req, res) => {
  res.json(appInfo);
});

router.use('/api', apiRouter);
app.use('/', router);

export { app, log };
