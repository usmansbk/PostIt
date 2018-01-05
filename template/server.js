const express = require('express')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv');

dotenv.config();

let request = require('request');
const db_url = process.env.FRONTEND_HOSTNAME,
    , db_port = process.env.DEV_DB_PORT;

const app = express()
    , port = process.env.FRONTEND_PORT;

request = request.defaults({ jar: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname,
  });
});

/**
 * @function stripJSON
 * @desc - This function removes selected object keys
 * @param {Object} json - JavaScript object to strip
 * @param {Object[]} keys - array of selected keys (string)
 * @return {Object} - deep copy of object without keys
 */
function stripJSON(json, keys) {
  if (json === null || json === undefined) return json;
  let obj = {}, key;
  for (key in json) {
    let inside = keys.indexOf(key);
    if (inside !== -1) continue;

    if (typeof json[key] === 'object') {
      obj[key] = stripJSON(json[key], keys);
    } else {
      obj[key] = json[key];
    }
  }
  return obj;
}


app.post('/api/user/signin', (req, res) => {
  const url = `${db_url}:${db_port}${req.url}`;
  console.log(url);
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      body = stripJSON(body, ["password"]);
      res.status(statusCode).json(body);
    }
  });
});

app.post('/api/user/signup', (req, res) => {
  const url = `${db_url}:${db_port}${req.url}`;
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      body = stripJSON(body, ["password"]);
      res.status(statusCode).json(body);
    }
  });
});

app.post('/api/group', (req, res) => {
  const url = `${db_url}:${db_port}${req.url}`;
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      res.status(statusCode).json(body);
    }
  });
});

app.post('/api/group/:guid/user', (req, res) => {
  const url = `${db_url}:${db_port}${req.url}`;
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      res.status(statusCode).json(body);
    }
  });
});

app.post('/api/group/:guid/message', (req, res) => {
  let url = `${db_url}:${db_port}${req.url}`;
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      res.status(statusCode).json(body);
    }
  });
});

app.get('/api/group/:guid/messages', (req, res) => {
  let url = `${db_url}:${db_port}${req.url}`;
  request.post(url, { form: req.body }, (err, response, body) => {
    if (err) {
      throw new Error();
    } else {
      const statusCode = response.statusCode;
      body = JSON.parse(body);
      res.status(statusCode).json(body);
    }
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'Unable to connect to database'
  });
});

app.listen(port, () => {
  console.log(`Front-end server started at port ${port}`);
});
