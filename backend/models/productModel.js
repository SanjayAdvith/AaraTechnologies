import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },

    images: {
        type: String,
        require: true,
        default: '/images/p2.jpg'
    },
    price: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },

    category: {
        type: String,
        required: true,
    }
}, { timestamp: true })


const Product = mongoose.model('Product', productSchema)

export default Product