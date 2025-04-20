import express from 'express';
import { getAllProducts, getFilteredProducts } from '../controllers/productController';

const router = express.Router();

router.get('/', getAllProducts); // /api/products
router.get('/filter', getFilteredProducts); // /api/products/filter

export default router;
