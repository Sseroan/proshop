import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB(); //connect to MongoDb

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on Port : ${port}`);
});
