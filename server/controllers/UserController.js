'use strict'

const { User } = require('../models/index')
const { compareHash } = require('../helpers/hash')
const { signToken } = require('../helpers/jwt')

class UserController {
  static async login(req, res, next) {
    try {
      let options = {
        where: {
          username: req.body.username
        }
      }
      let user = await User.findOne(options)
      if (!user) {
        throw { msg: "Username/Password is Wrong", status: 404 }
      }
      else if (compareHash(req.body.password, user.password)) {
        let access_token = signToken({
          id: user.id,
          username: user.username
        })
        res.status(200).json({
          access_token
        })
      }
      else {
        throw { msg: "Not Authorized", status: 401 }
      }
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = UserController