import express from 'express'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import userRoutes from './routes/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()
const app = express()
connectDB()

app.use(express.json())


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


// error handaling on postman
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('API is running'))