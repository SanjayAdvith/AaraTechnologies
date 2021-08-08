import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


const registerUser = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password,
        gender,
        address,
    } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        gender,
        address,

    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.send(user)

})

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if (user) {
        res.json(user)
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})


export {
    loginUser,
    registerUser, getUsers,
    getUserById
}