import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
const Product = ({ product, history }) => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const [btn, setBtn] = useState(1)
    console.log('history ' + history);
    const addToCartHandler = (e) => {
        if (btn) {
            dispatch(addToCart(product._id))
            setBtn(0)
        } else {
            dispatch(removeFromCart(product._id))
            setBtn(1)
        }
    }

    return (
        <Card className='my-3 p-3 rounded'>

            <Card.Img src={product.images} variant='top' />

            <Card.Body>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>

                <Card.Text as='div'>
                    <div>
                        {product.title}
                    </div>
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
                <Button
                    className='btn btn-danger'
                    onClick={addToCartHandler}
                >
                    {btn? 'Add to Cart' : 'Remove'}
                </Button>
            </Card.Body>

        </Card>

    )
}

export default Product
