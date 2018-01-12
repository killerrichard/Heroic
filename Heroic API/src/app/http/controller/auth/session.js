export default class Session {

  static get (req, res) {
    res.sendJSON({"user":"Chris"})
  }
  
}
