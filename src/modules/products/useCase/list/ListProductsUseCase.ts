import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

class ListProductsUseCase {
  async execute(): Promise<Product[]> {
    const productsRepository = getRepository(Product);

    try {
      const products = await productsRepository.find();
      return products;
    } catch (error) {
      console.log('Error:' + error.message);
    }
  }
}

export { ListProductsUseCase };
