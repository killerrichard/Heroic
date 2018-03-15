import Error from '../../../lib/error'
import Database from '../../../sql/interactors/news/articles'
export default class Controller {

  static async create (request, reply) {
    try {
      const data = {
        user_id       : request.raw.session.id,
        category_id   : request.body.category_id,
        title         : request.body.title,
        description   : request.body.description,
        content       : request.body.content,
        image         : request.body.image
      }
      let step        = await Database.create(data)
      reply.code(200).send(step)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async update (request, reply) {
    try {
      if (request.body.id!=undefined) {

      }
      const data = {
        id            : request.params.id,
        user_id       : request.raw.session.id,
        category_id   : request.body.category_id,
        title         : request.body.title,
        description   : request.body.description,
        content       : request.body.content,
        image         : request.body.image.replace('_thumb.png', '')
      }
      let step        = await Database.read(data.id)
      step            = await Database.update(data)
      reply.code(200).send(step)
    }
    catch (error) { 
      new Error(error, request, reply)
    }
  }

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

  static async delete (request, reply) {
    try {
      let article = await Database.delete(request.params.id)
      reply.code(200).send('Article has been deleted')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
