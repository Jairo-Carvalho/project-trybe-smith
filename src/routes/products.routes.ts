import { Router } from 'express';

import ProductController from '../controllers/products.controller';

const productRoute = Router();

productRoute.post('/', ProductController.createProduct);
productRoute.get('/', ProductController.findAll);

export default productRoute;
