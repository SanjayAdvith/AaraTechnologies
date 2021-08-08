import express from 'express'
const router = express.Router()
import {
    loginUser,
    getUsers, registerUser, getUserById
} from '../controllers/userController.js'


router.route('/').post(registerUser).get(getUsers)
router.post('/login', loginUser)
router.route('/:id').get(getUserById)

export default router
