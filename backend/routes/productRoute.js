import express from 'express'
import {
    getProduct,
    getProductById,
    deleteProduct,
    createProduct
} from '../controllers/productController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()



router.route('/').get(getProduct).post(protect, createProduct)

router.route('/:id').get(getProductById).delete(protect, deleteProduct)







export default router