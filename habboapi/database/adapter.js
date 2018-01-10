import __config from '../../config.json';
import knex from 'knex';
import bookshelf from 'bookshelf';

const Adapter = bookshelf(knex(__config.database));

Adapter.plugin('registry');

export default Adapter;