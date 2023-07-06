import { Router } from 'express';
import {
  nameRequire,
  nameType,
  nameTypeLength,
  priceRequire,
  priceType,
  priceTypeLength,
} from '../middlewares/product.validation';

import ProductController from '../controllers/products.controller';

const productRoute = Router();

productRoute.post(
  '/',
  nameRequire,
  nameType,
  nameTypeLength,
  priceRequire,
  priceType,
  priceTypeLength,
  ProductController.createProduct,
);
productRoute.get('/', ProductController.findAll);

export default productRoute;
