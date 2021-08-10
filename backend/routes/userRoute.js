import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, getUsers, registerUser } from '../controllers/userController.js'

import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)


export default router
