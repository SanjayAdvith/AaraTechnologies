import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,

} from './reducers/productReducers'
import { userLoginReducer, userRegisterReducer, userListReducer } from './reducers/userReducers'

import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,


    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []



const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: { cartItems: cartItemsFromStorage }
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store