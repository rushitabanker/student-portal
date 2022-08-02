const router = require('express').Router()


const {getMarks, editMarks} = require('../controllers/marksController')

// const auth = require('../middlewares/auth')

router.route('/marks/:id').get(getMarks)
router.route('/marks/:id').put(editMarks)
// router.route('/tests').post(createMarks)
// router.route('/tests/:id').delete(deleteMarks)
// router.route('/tests/:id').put(editMarks)

// router.route('/register').post(register)
// router.route('/refresh_token').get(getRefreshToken)
// router.route('/logout').get(logout)
// router.route('/info').get( getInfo)

module.exports = router;