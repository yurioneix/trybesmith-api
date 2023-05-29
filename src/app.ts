import express from 'express';
import productRouter from './router/productRouter';
import orderRouter from './router/orderRouter';

const app = express();

app.use(express.json());

app.use(productRouter);

app.use(orderRouter);

export default app;
