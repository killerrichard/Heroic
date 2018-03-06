import Error from '../../../lib/error'
import Database from '../../../sql/interactors/config/website'
export default class Controller {

  static async read (request, reply) {
    try {
      let config = await Database.read()
      reply.code(200).send(config)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
