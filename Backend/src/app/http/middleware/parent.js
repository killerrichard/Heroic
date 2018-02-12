export default class Middleware {

  static check (req, res, next) {
    // Do some validation (later)
    next()
  }

}
