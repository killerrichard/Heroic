import Async from 'async'
import Login from './login'
import Validator from 'validator'
import Auth from '../../../sql/ext/emulator/user_auth'
import User from '../../../sql/ext/emulator/user_crud'
export default class Register {

  static try (req, res) {
    Async.waterfall([ Async.apply(Register.sanitize, req), Register.validate, Auth.hasDuplicates, Auth.hasAccounts, User.create, Login.push ], (( errors, token) => {
      if (errors) {
        console.log(errors)
        res.status(500).send(errors).end()
      } else {
        res.status(200).json(token).end()
      }
    }))
  }

  // Cuts down request object into data that is needed
  static sanitize (req, callback) {
    let data = {
      username  : req.body.username,
      password  : req.body.password,
      mail      : req.body.email.substr(0, 25),
      ip        : req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }

    callback(null, data)
  }

  // Will ensure that the data is valid and safe to use
  static validate (data, callback) {
    if (Validator.isAlphanumeric(data.username))  {
      if (Validator.isEmail(data.mail)) {
        callback(null, data)
      } else {
        callback({ errors : 'Email contained invalid characters'})
      }
    } else {
      callback({ errors : 'Username contained invalid characters'})
    }
  }

  // Begins the user session
  static push (data, callback) {
    console.log(data)
  }


  // Functions
  static matchUsername (req, res) {
    User.retrieve('username', req.params.username, 'data')
      .then (user => {
        if (user) {
          res.status(400).end()
        } else {
          res.status(200).end()
        }
      })
  }

  static matchEmail (req, res) {
    User.retrieve('mail', req.params.email, 'data')
      .then (user => {
        if (user) {
          res.status(400).end()
        } else {
          res.status(200).end()
        }
      })
  }

}
