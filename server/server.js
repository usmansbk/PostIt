import express from 'express';
import bodyParser from 'body-parser';
import Logger from 'bunyan';

const app = express();
const port = process.env.PORT || 8888;
const router = express.Router();
const log = new Logger({name: 'Server'});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) =>
  res.json({ message: 'hooray! welcome to our api!'}));

app.use('/', router);

app.listen(port);
log.info(`Server listening to port ${port}`);
