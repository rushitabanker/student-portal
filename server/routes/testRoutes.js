const router = require('express').Router()


const {getTests, createTest, deleteTest, getTest, editTest} = require('../controllers/testController')

// const auth = require('../middlewares/auth')

router.route('/tests').get(getTests)
router.route('/tests').post(createTest)
router.route('/tests/:id').get(getTest)
router.route('/tests/:id').delete(deleteTest)
router.route('/tests/:id').put(editTest)
// router.route('/register').post(register)
// router.route('/refresh_token').get(getRefreshToken)
// router.route('/logout').get(logout)
// router.route('/info').get( getInfo)

module.exports = router;