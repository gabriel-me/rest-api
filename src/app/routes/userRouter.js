const express = require('express')

const authMiddleware = require('../middlewares/authMiddleware')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/api/users/:id', authMiddleware, userController.getUser)
router.post('/api/users', userController.create)

module.exports = router