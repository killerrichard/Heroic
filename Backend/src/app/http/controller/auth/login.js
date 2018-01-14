import Token from 'jsonwebtoken'
import User from '../../../sql/ext/emulator/user_auth'
export default class Login {

  static try (req, res) {

    if (req.body.username != null && req.body.password != null) {
      User.attempt(req.body)
        .then (user => {
          const token = Token.sign(user, 'sld&!@$ZZACHRIS', { expiresIn : 60*60*24 })
          req.session.auth = token
          res.status(200).json(token).end()
        })
        .catch (error => {
          if (error.errors == 'auth') {
            res.status(400).json({ error : 'Failed to authenticate' }).end()
          } else {
            res.status(400).json(error).end()
          }
        })
    } else {
      res.status(400).json({ error : 'Username and password must both be filled' }).end()
    }

  }

  static sso (req, res) {
    res.status(200).json({ sso : 'LOL' }).end()
  }

}
