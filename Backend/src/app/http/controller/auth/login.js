import User from '../../../sql/ext/emulator/user_auth'
export default class Login {

  static try (req, res) {
    User.attempt(req.body)
      .then (user => {
        req.session.auth = user
        res.status(200).json({ session : user }).end()
      })
      .catch (error => {
        if (error.errors == 'auth') {
          res.status(401).json(error).end()
        } else {
          res.status(400).json(error).end()
        }
      })
  }

  static sso (req, res) {
    res.status(200).json({ sso : 'LOL' }).end()
  }

}
