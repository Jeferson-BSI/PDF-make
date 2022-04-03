import { Router } from 'express';

import { ProductsController } from './modules/products/useCase/create/ProductsController';
import { ListProductsController } from './modules/products/useCase/list/ListProductsController';
import { ReportProductsController } from './modules/products/useCase/report/ReportProductsController';

const routes = Router();

const productsController = new ProductsController();
const listProductsController = new ListProductsController();
const reportProductsController = new ReportProductsController();

routes.post('/products', productsController.handle);
routes.get('/products', listProductsController.handle);
routes.get('/products/report', reportProductsController.handle);

export { routes };
