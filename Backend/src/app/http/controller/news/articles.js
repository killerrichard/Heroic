import Error from '../../../lib/error'
import Database from '../../../sql/interactors/news/articles'
export default class Controller {

  static async read (request, reply) {
    try {
      if (request.params.id) {
        let article = await Database.read(request.params.id)
        reply.code(200).send(article)
      } else {
        let articles = await Database.read()
        reply.code(200).send(articles)
      }
    } 
    catch (error) {
      new Error(error, request, reply)
    }

  }
}
