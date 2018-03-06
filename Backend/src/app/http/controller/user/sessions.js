import Error from '../../../lib/error'
import Authentication from '../../../lib/jwt'
import Database from '../../../sql/interactors/user/users'
export default class Controller {

  static async create (request, reply) {
    try {
      let session = await Database.login(request.body.username, request.body.password)
      session     = await Database.read(request.body.username, 'username')
      session     = await Authentication.sign(session)
      reply.code(200).send(session)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async read (request, reply) {
    try {
      let session = await Database.read(request.raw.session.id, 'id', true)
      reply.code(200).send(session)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
