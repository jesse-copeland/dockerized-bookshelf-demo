const express = require('express');
const PORT = process.env.EXPRESS_HOST_PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
});