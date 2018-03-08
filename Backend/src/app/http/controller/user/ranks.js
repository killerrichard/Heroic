import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/ranks'
export default class Controller {

  static async read (request, reply) {
    try {
      let ranks = await Database.read()
      reply.code(200).send(ranks)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
