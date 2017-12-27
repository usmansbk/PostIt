import express from 'express';
import bodyParser from 'body-parser';
import Logger from 'bunyan';
import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 8888;
const router = express.Router();
const log = new Logger({ name: 'Server' });
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

router.get('/', (req, res) => {
  res.json(appInfo);
});

router.use('/api', apiRouter);

app.use('/', router);

app.listen(port);
log.info(`Server listening to port ${port}`);
