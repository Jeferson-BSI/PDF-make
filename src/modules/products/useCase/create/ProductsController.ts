import { Request, Response } from 'express';
import { ProductsUseCase } from './ProductsUseCase';

class ProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, price, quantity } = request.body;

    const productsUseCase = new ProductsUseCase();
    const product = await productsUseCase.execute({
      description,
      price,
      quantity,
    });

    return response.json(product);
  }
}

export { ProductsController };
