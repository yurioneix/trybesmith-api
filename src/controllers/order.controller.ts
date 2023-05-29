import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getAll(_req: Request, res: Response) {
  const allOrders = await orderService.getAll();
  
  return res.status(200).json(allOrders);
}

export default { getAll };