import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../../../../config'
import Cascade from 'bookshelf-cascade-delete'

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
Database.plugin(Cascade)

export default Database
