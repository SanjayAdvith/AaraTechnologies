import express from 'express'
import {
    getProduct,
    getProductById,
    deleteProduct,
    createProduct,

} from '../controllers/productController.js'

const router = express.Router()


router.route('/').get(getProduct).post(createProduct)

router.route('/:id').get(getProductById).delete(deleteProduct)







export default router