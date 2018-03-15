import knex from 'knex'
import bookshelf from 'bookshelf'
import Delete from 'bookshelf-cascade-delete'
import Configuration from '../config/database'

const data = {
  client :"mysql2",
  connection:{
    host: Configuration.host,
    user: Configuration.user,
    password: Configuration.password,
    database: Configuration.database
  }
}
const Database = bookshelf(knex(data))

Database.plugin(Delete)

export default Database
