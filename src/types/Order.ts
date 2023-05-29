export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderProducts = {
  id: number;
  userId: number;
  productIds: number[];
};
