import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'



export const getProduct = asyncHandler(async (req, res) => {

    const products = await Product.find()
    res.json(products)
})

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('Error')
    }
})


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


export const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        images,
        category,
        countInStock,
        title
    } = req.body


    const product = await Product.create({
        name,
        price,
        images,
        category,
        countInStock,
        title

    })

    if (product) {
        res.status(201).json({
            _id: product._id,
            name: product.name,
            price: product.email,
            title: product.title,

        })
    } else {
        res.status(400)
        throw new Error('Invalid product data')
    }
})

