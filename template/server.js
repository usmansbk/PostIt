const express = require('express')
    , morgan = require('morgan')
    , bodyParser = require('body-parser');

let request = require('request');

const app = express()
    , port = process.env.FRONTEND_PORT || 8999;

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

app.post('/user/signin', (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({message: 'works'});
});

app.post('/user/signup', (req, res) => {
  res.send('sign up');
});

app.post('/group', (req, res) => {
  res.send('create group');
});

app.post('/group/:guid/user', (req, res) => {
  res.send('add user');
});

app.post('/group/:guid/message', (req, res) => {
  res.send('post message');
});

app.get('/group/:guid/messages', (req, res) => {
  res.send('retrieve messages');
});

app.listen(port, () => {
  console.log(`Front-end server started at port ${port}`);
});
