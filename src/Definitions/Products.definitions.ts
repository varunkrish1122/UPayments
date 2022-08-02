export type Product = {
  name: string;
  avatar: string;
  developerEmail: string;
  price: number;
  category: string;
  description: string;
  createdAt?: number;
  _id?: number | string;
};

export type Products = Product[]

