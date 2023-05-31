import express from 'express';
import productRouter from './router/productRouter';
import orderRouter from './router/orderRouter';
import loginRouter from './router/loginRouter';

const app = express();

app.use(express.json());

app.use(productRouter);

app.use(orderRouter);

app.use(loginRouter);

export default app;
