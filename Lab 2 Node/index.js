const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/Todo', {
  useUnifiedTopology: true,
});
app.use(express.json());
app.use('/', routes);
app.use('*', (req, res, next) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(422).json(err.errors);
  }
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log('App is ready and up on ', PORT);
});
