export default class Library {

  constructor (error, request, reply) {
    if (error.indexOf('RETURN:') > -1) {
      reply.code(500).send({ error : error.split('RETURN:')[1] })
    } else {
      console.log(` [ ERROR ] ${error}`)
      reply.code(500).send({ error : 'Internal server error' })
    }
  }

}
