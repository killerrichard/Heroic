import Error from '../../../lib/error'
import Database from '../../../sql/interactors/config/website'
export default class Controller {

  static async update (request, reply) {
    try {
      const data = {
        site_name           : request.body.site_name,
        site_desc           : request.body.site_desc,
        site_link           : request.body.site_link,
        server_ip           : request.body.server_ip,
        server_port         : request.body.server_port,
        findretros_user     : request.body.findretros_user,
        findretros_enabled  : request.body.findretros_enabled 
      }
      let config = await Database.update(data)
      reply.code(200).send('Your changes have been saved')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

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
