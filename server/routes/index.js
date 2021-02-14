'use strict'

const router = require('express').Router()
const UserController = require('../controllers/UserController')
const BarangController = require('../controllers/BarangController')
const { authentication, authorization } = require('../middlewares/auth')

router.post('/login', UserController.login)

router.get('/barang', BarangController.show)
router.post('/barang', BarangController.add)
router.put('/barang/:id', BarangController.edit)
router.delete('/barang/:id', BarangController.delete)

module.exports = router