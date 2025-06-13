export interface Product {
  id: string;
  name: string;
  purchasePrice: number;
  price: number;
  discountedPrice: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutItem {
  id: string;
  quantity: number;
}