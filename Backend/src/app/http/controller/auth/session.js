export default class Session {

  static get (req, res) {
    res.status(200).send({ session : req.session.auth }).end()
  }

}
