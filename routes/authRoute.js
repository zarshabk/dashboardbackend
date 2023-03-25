const { Register, Login } = require('../Controllers/authCtrl')

const router = require('express').Router()
const upload = require('../config/multer')


router.post('/register', upload.single('image'), Register)
router.post('/login', Login)



module.exports = router