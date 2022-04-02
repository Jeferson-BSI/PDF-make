import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const productsUseCase = new ListProductsUseCase();
    const products = await productsUseCase.execute();

    return response.json(products);
  }
}

export { ListProductsController };
