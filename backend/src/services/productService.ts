import path from 'path';
import fs from 'fs';
import { fetchGoldPrice } from './goldPriceService';
import { calculateProductPrice } from '../utils/calculatePrice';
import { ProductRaw, ProductResponse } from '../models/Product';

export const getProductsWithPrices = async (): Promise<ProductResponse[]> => {
  const filePath = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, '..', '..', 'dist', 'data', 'products.json')
  : path.join(__dirname, '..', 'data', 'products.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const products: ProductRaw[] = JSON.parse(rawData);
  const goldPrice = await fetchGoldPrice();

  return products.map((product) => ({
    ...product,
    price: calculateProductPrice(product.popularityScore, product.weight, goldPrice),
    popularityOutOfFive: parseFloat((product.popularityScore * 5).toFixed(1))
  }));
};
