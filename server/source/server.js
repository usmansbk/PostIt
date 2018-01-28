import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/api';
import appInfo from './helpers/info';

const app = express();
const logger = morgan('dev');

app.use(cors({credentials:true, origin:'http://localhost:8080'}));
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
export default app;
