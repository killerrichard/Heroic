'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _database = require('../config/database');

var _database2 = _interopRequireDefault(_database);

var _bookshelfCascadeDelete = require('bookshelf-cascade-delete');

var _bookshelfCascadeDelete2 = _interopRequireDefault(_bookshelfCascadeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Database = (0, _bookshelf2.default)((0, _knex2.default)(_database2.default));
Database.plugin(_bookshelfCascadeDelete2.default);

exports.default = Database;