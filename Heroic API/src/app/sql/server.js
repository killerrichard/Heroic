import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../config/database'

const Database = bookshelf(knex(config))

export default Database
