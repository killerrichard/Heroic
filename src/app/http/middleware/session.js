import Token from 'jsonwebtoken'
import Configuration from '../../config/options'
export default class Middleware {

  static check (request, reply, next) {
   next()
  }

}
