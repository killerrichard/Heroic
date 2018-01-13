import Async from 'async'
import Validator from 'validator'
import Auth from '../../../sql/ext/emulator/user_auth'
import User from '../../../sql/ext/emulator/user_crud'
export default class Login {

  static try (req, res) {
    Async.waterfall([ Async.apply(Login.sanitize, req), Login.validate, Auth.hasDuplicates, Auth.hasAccounts, User.create, Login.push ], (( errors, results => {
      if (errors) {
        res.status(500).send(errors).end()
      } else {
        res.status(200).send(results).end()
      }
    })))
  }

  // Cuts down request object into data that is needed
  static sanitize (req, callback) {
    let data = {
      username  : req.body.username,
      mail      : req.body.mail,
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

}
