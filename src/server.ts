import express from 'express';
import 'reflect-metadata';

import './database';

const app = express();

app.post('/products', (request, response) => {
  return res.send('Hello World!');
});

app.listen(3333, () =>
  console.log('Server is running on Port: http://localhost:3333')
);
