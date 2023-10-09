import express from 'express';
import products from './data/products.js';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const port = 5000;
app.listen(port, () => {
  console.log(`API is running on Port : ${port}`);
});
