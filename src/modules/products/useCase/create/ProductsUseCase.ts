import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

interface IRequest {
  description: string;
  price: number;
  quantity: number;
}

class ProductsUseCase {
  async execute({ description, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getRepository(Product);

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
