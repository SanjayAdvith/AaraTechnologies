import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//getting all products
export const getProduct = asyncHandler(async (req, res) => {

    const products = await Product.find({})  // empty object gives all data
    res.json(products)
})

// getting product by id
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('Error')
    }
})

// deleting product
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// creating product
export const createProduct = asyncHandler(async (req, res) => {

    const { name, price, image, is_in_stock, title } = req.body

    const createdProduct = await Product.create({

        user: req.user._id,
        name, price,
        image, is_in_stock,
        title
    })
    if (createdProduct) {
        res.status(201).json({
            _id: createdProduct._id,
            name: createdProduct.name,
            user_Id: createdProduct.user,
            price: createdProduct.price,
            title: createdProduct.title
        })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})



