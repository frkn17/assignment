import { Request, Response } from 'express';
import { getProductsWithPrices } from '../services/productService';
import { ProductResponse } from '../models/Product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const enrichedProducts: ProductResponse[] = await getProductsWithPrices();
    res.status(200).json(enrichedProducts);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to fetch products' });
  }
};

export const getFilteredProducts = async (req: Request, res: Response) => {
  try {
    const products: ProductResponse[] = await getProductsWithPrices();
    const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query;

    const filtered = products.filter((product) => {
      const inPriceRange =
        (!minPrice || product.price >= parseFloat(minPrice as string)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice as string));

      const inPopularityRange =
        (!minPopularity || product.popularityOutOfFive >= parseFloat(minPopularity as string)) &&
        (!maxPopularity || product.popularityOutOfFive <= parseFloat(maxPopularity as string));

      return inPriceRange && inPopularityRange;
    });

    res.status(200).json(filtered);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Failed to filter products' });
  }
};
