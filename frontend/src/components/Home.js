import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Product from './Product'
import Loader from './Loader'
import Message from './Message'

const Home = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList   // comes from reducers 


    const [item, setItem] = useState(0)



    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <div>
            <h1>AARA Technology</h1>

            {loading ? <Loader /> : error ? <Message cariant="danger">{error}</Message> : (

                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} key={product.id} />
                        </Col>
                    )
                    )}
                </Row>
            )}


            <Button
                variant="light"
                onClick={() => setItem(item > 0 ? item - 1 : item)
                }>
                <i class="fas fa-minus"></i></Button>

            <span className='cartNum'>{item}</span>

            <Button
                variant="light"
                onClick={() => setItem(item >= 0 ? item + 1 : item)
                }>

                <i class="fas fa-plus"></i></Button>
        </div>
    )
}

export default Home
