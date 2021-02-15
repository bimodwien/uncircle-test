'use strict'

const router = require('express').Router()
const UserController = require('../controllers/UserController')
const BarangController = require('../controllers/BarangController')
const { authentication, authorization } = require('../middlewares/auth')

router.post('/login', UserController.login)

router.get('/barang',authentication, BarangController.show)
router.post('/barang',authentication, authorization, BarangController.add)
router.put('/barang/:id',authentication, authorization, BarangController.edit)
router.delete('/barang/:id',authentication, authorization, BarangController.delete)

module.exports = router