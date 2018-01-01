import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes/api';

const app = express();
const logger = morgan('dev');

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
app.use(logger);
app.use(session({
  secret: 's3cr3t',
  cookie: {}
}));

app.get('/', (req, res) => {
  res.json(appInfo);
});

app.use(router);
app.use((err, req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Nothing you can do about it!'
  });
});

export default app;
