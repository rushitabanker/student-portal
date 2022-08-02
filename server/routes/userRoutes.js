const router = require('express').Router()

// const {login,logout,register,refreshToken,getUserInfo} = require('../controllers/userController')

const {register,login, getUserInfo, refreshToken, logout}= require('../controllers/userController')

const auth = require('../middlewares/auth')

// router.route('/').get(getUsers)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/refresh_token').get(refreshToken)
router.route('/logout').get(logout)
router.route('/info').get(auth,getUserInfo)

module.exports = router;