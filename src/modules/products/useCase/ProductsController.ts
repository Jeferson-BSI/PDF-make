import { Request, Response } from 'express';

class ProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export { ProductsController };
