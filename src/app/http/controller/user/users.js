import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/users'
export default class Controller {

  static async create (request, reply) {
    try {
      const data = {
        username    : request.body.username,
        password    : request.body.password,

      }
      const user = await Database.create(data)

      reply.code(200).send(user)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static read (request, reply) {

  }

  static update (request, reply) {

  }

  static delete (request, reply) {

  }


}
