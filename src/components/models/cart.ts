export interface Cart {
  id: number;
  userId?: number;
  date: Date;
  products: ProductCart[];
}

export interface ProductCart {
  productId: number;
  quantity: number;
}
