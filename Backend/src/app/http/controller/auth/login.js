import Token from 'jsonwebtoken'
import User from '../../../sql/ext/emulator/user_auth'
export default class Login {

  static try (req, res) {

    if (req.body.username != null && req.body.password != null) {
      User.attempt(req.body)
        .then (user => {
          const token = Token.sign(user, 'sld&!@$ZZACHRIS', { expiresIn : 60*60*24 })
          res.status(200).json(token).end()
        })
        .catch (error => {
          res.status(400).end()
        })
    } else {
      res.status(400).end()
    }

  }

  static sso (req, res) {
    res.status(200).json({ sso : 'LOL' }).end()
  }

  static push (data, callback) {
    User.attempt({ username : data.username, password : data.password })
    .then (user => {
      const token = Token.sign(user, 'sld&!@$ZZACHRIS', { expiresIn : 60*60*24 })
      callback(null, token)
    })
    .catch (error => {
      callback(error)
    })
  }

}
