import express from 'express';
import products from './data/products.js';

const app = express();

app.get('/', (req, res)=>{
  res.status(200).send('API is running...')
})

const port = 5000;
app.listen(port, () => {
  console.log(`API os running on Port : ${port}`);
});
