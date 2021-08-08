import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CartItem from './CartItem'

const Home = () => {
    const [item, setItem] = useState(0)
    return (
        <div>
            <h1>AARA Technology</h1>
            <CartItem />
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
