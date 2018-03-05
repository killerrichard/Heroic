import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/users'
export default class Controller {

  static async create (request, reply) {
    try {
      const data = {
        username    : request.body.username,
        password    : request.body.password,
        mail        : request.body.email,
        ip_register : request.ip,
        ip_current  : request.ip
      }
      let user    = await Database.create(data) 
      reply.code(200).send(user)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async read (request, reply) {
    try {
      let user = await Database.read('username', request.params.username)
      if (user) {
        reply.code(200).send(user)
      } else {
        reply.code(404).send('User not found')
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async update (request, reply) {
    try {
      const data = {
        id      : request.session.id,
        motto   : 'LOL'
      }
      let user = await Database.update(data)
      reply.code(200).send('Changes saved')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static delete (request, reply) {

  }


}
