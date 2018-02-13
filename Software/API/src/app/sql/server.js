import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../../../../config'

const data = {
  client :"mysql",
  connection:{
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
  }
}



const Database = bookshelf(knex(data))

export default Database
