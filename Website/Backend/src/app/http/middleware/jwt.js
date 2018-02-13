import Token from 'jsonwebtoken'
export default class Middleware {

  static check (req, res, next) {
    const token = req.headers['x-access-token']

    Token.verify(token, 'sld&!@$ZZACHRIS', ((error, decoded) => {
      if (!error) {
        req.decoded = decoded
        next()
      } else {
        res.status(401).json({ error : 'Failed to authenticate session'}).end()
      }
    }))
  }

}
