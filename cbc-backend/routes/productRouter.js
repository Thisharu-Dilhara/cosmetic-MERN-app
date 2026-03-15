import express from 'express';
import { createProduct, getAllProducts, deleteProduct, updateProduct, getProductByID } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.delete('/:productID', deleteProduct);
productRouter.put('/:productID', updateProduct);
productRouter.get('/:productID', getProductByID);
export default productRouter;
