import { Request, Response } from 'express';
import ProductService from '../services/products.service';

async function createProduct(req: Request, res: Response) {
  const Product = req.body;
  const result = await ProductService.createProduct(Product);
  return res.status(201).json(result);
}

async function findAll(_req: Request, res: Response) {
  const result = await ProductService.findAll();
  return res.status(200).json(result);
}
export default {
  createProduct,
  findAll,
};
