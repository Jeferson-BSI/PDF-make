import express from 'express';
import 'reflect-metadata';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.post('/products', (request, response) => {
  return response.send('Hello World!');
});

app.listen(3333, () =>
  console.log('Server is running on Port: http://localhost:3333')
);
