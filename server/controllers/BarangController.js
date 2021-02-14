'use strict'

const { Barang } = require('../models/index')

class BarangController {
  static async show(req, res, next) {
    try {
      const data = await Barang.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      let params = {
        nama: req.body.nama,
        harga: req.body.harga,
        stock: req.body.stock,
        image_url: req.body.image_url
      }
      const data = await Barang.create(params)
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async edit(req, res, next) {
    try {
      let params = {
        nama: req.body.nama,
        harga: req.body.harga,
        stock: req.body.stock,
        image_url: req.body.image_url
      }
      const data = await Barang.update(params, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await Barang.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({msg: "Barang berhasil dihapus"})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = BarangController