import Async from 'async'
import Auth from '../../../sql/ext/emulator/users/user_auth'
import User from '../../../sql/ext/emulator/users/user_crud'
export default class Login {

  static try (req, res) {

    Async.waterfall([ Async.apply(Login.sanitize, req), Login.validate, Auth.hasDuplicates, Auth.hasAccounts, User.create,Login.push ], (( errors, results => {

    }))

  }

  // Cuts down request object into data that is needed
  static sanitize (req, callback) => {

    let data = {
      username  : req.body.username,:
      mail      : req.body.mail,
      ip        : req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }

    callback(null, data)

  }

  // Will ensure that the data is valid and safe to use
  static validate (data, callback) => {
    Async.series([
      // Check username field
      function (callback) => {
        // Yadda
      },
      // Check email field
      function (callback) => {
        // Yaddaa
      }
    ], ((errors, results) => {

      if (!errors) {
        callback(null, data)
      } else {
        callback(errors)
      }

    }))
  }

  // Begins the user session
  static push (data, callback) => {
    // Will do!
  }

}
