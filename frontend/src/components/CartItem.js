import React from 'react'
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap'
const CartItem = () => {
    const addToCartHandler = () => { }
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <ListGroup>
                        <ListGroup.Item>

                            <Image
                                src="./images/p2.jpg"
                                alt="Linking Error"
                                rounded
                                height="90%"
                                width="90%"
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Best product in the market</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className='btn btn-danger'
                                onClick={addToCartHandler}
                            >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <ListGroup>
                        <ListGroup.Item>

                            <Image
                                src="./images/p2.jpg"
                                alt="Linking Error"
                                rounded
                                height="90%"
                                width="90%"
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Best product in the market</h4>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default CartItem
