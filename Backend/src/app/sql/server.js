import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../config/database'
import Cascade from 'bookshelf-cascade-delete'

const Database = bookshelf(knex(config))
Database.plugin(Cascade)

export default Database
