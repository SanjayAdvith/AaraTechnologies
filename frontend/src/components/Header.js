import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Form,
    Button,
    Nav,
    Navbar,
    Container, Row,
    Col, FormControl
} from 'react-bootstrap'
const header = () => {
    return (
        <Row className='menu'>
            <Col>
                <Navbar variant="dark" expand='lg'>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">AARA Technologies</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle area-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav' >
                            <Form style={{ display: 'flex', marginRight: 'auto' }}>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Nav className="ml-auto">
                                <Nav.Link href="#features">Login
                                    <i className='fas fa-user'></i>
                                </Nav.Link>
                                <Nav.Link href="#pricing">Cart
                                    <i className='fas fa-shopping-cart'></i>
                                    <span className='cartNum'>2</span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    )
}

export default header
