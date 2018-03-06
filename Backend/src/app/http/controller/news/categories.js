import Error from '../../../lib/error'
import Database from '../../../sql/interactors/news/categories'
export default class Controller {

  static async read (request, reply) {
    try {
      if (request.params.id) {
        let category = await Database.read(request.params.id)
        reply.code(200).send(category)
      } else {
        let categories = await Database.read() 
        reply.code(200).send(categories)
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
