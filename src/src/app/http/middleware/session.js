import Token from '../../lib/jwt'
import Error from '../../lib/error'
export default class Middleware {

  static async check (request, reply, next) {
    try {
      request.session = Token.validate(request.headers['x-access-token'])
      next()
    }
    catch (error) {
      reply.code(400).send('Could not authorize this request')
    }
  }

}
