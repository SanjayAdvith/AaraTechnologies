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
    image: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    is_in_stock: {
        type: Number,
        require: true,
        default: 0
    }
}, { timestamp: true })


const Product = mongoose.model('Product', productSchema)

export default Product