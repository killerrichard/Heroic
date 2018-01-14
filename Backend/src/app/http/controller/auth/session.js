import User from '../../../sql/ext/emulator/user_crud'
export default class Session {

  static get (req, res) {
    User.read(req.decoded.id)
      .then (user => {
        res.status(200).json(user).end()
      })
      .catch (error => {
        console.log(error)
        res.status(400).json({ error : error }).end()
      })
  }

  static delete (req, res) {
    req.session = null
    res.status(200).json({ session : null }).end()
  }

}
