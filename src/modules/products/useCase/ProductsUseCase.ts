import { getRepository } from 'typeorm';
import { Products } from '../repository/ProductsRepository';

interface IRequest {
  description: string;
  price: number;
  quantity: number;
}

class ProductsUseCase {
  async execute({ description, price, quantity }: IRequest): Promise<Products> {
    const productsRepository = getRepository(Products);

    const products = productsRepository.create({
      description,
      price,
      quantity,
    });
    try {
      await productsRepository.save(products);
    } catch (error) {
      console.log('Error:' + error.message);
    }

    return products;
  }
}

export { ProductsUseCase };
