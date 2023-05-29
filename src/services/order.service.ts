import { Sequelize } from 'sequelize';
import { OrderProducts } from '../types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

async function getAll(): Promise<OrderProducts[]> {
  const allOrders = await OrderModel.findAll({
    attributes: [
      'id', 'userId', 
      [Sequelize.literal('JSON_ARRAYAGG(`productIds`.`id`)'), 'productIds'],
    ],
    include: { 
      model: ProductModel, 
      as: 'productIds',
      attributes: [],
    },
    group: ['Order.id'],
    raw: true,
  }) as unknown as OrderProducts[];
  console.log(allOrders);
  
  return allOrders;
}

getAll();

export default getAll;