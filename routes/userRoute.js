const { getAll, delUser, getSingle } = require('../Controllers/userCtrl')

const router = require('express').Router()


router.get('/', getAll)
router.delete('/:id', delUser)
router.get('/:id', getSingle)




module.exports = router