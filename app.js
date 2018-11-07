const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.EXPRESS_HOST_PORT;

const POSTGRES_HOSTNAME = process.env.POSTGRES_HOSTNAME;

const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
});