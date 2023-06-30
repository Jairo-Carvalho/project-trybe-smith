import { Product } from '../types/Product';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

async function createProduct(product: Product): Promise<Omit<Product, 'orderId'>> {
  const newProduct = await ProductModel.create(product);
  
  const result = {
    id: newProduct.dataValues.id,
    name: newProduct.dataValues.name,
    price: newProduct.dataValues.price,
  };

  return result;
}

async function findAll(): Promise<ProductSequelizeModel[]> {
  const result = await ProductModel.findAll();
  return result;
}

export default {
  createProduct,
  findAll,
};
