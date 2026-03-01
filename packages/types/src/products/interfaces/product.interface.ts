import { CreateProductRequest } from "../dto/create-product.requests";

export interface Product extends CreateProductRequest {
  id: string;
}