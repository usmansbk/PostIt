import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bunyan from 'bunyan';
import router from './routes/api';
import appInfo from './helpers/info';

const app = express();
const logger = morgan('dev');
const log = bunyan.createLogger({ name: 'postit' });

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
  log.error('Error', err);
  res.status(500).json({
    status: 'error',
    message: 'Nothing you can do about it!'
  });
});
export default app;
