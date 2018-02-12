'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _users = require('../../model/emulator/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'create',
    value: function create(data, callback) {
      if (callback) {
        var user = {
          username: data.username,
          password: _bcrypt2.default.hashSync(data.password),
          mail: data.mail,
          account_created: (0, _moment2.default)(Date.now()).unix(),
          ip_register: data.ip,
          ip_current: data.ip
        };
        new _users2.default(user).save().then(function (user) {
          callback(null, data);
        }).catch(function (error) {
          callback({ errors: error });
        });
      } else {
        return new Promise(function (resolve, reject) {
          new _users2.default(data).save().then(function (user) {
            user.fetch({ columns: ['id', 'username', 'rank', 'look'] }).then(function (user) {
              resolve(user.toJSON());
            }).catch(function (error) {
              reject({ errors: error });
            });
          }).catch(function (error) {
            reject({ errors: error });
          });
        });
      }
    }
  }, {
    key: 'read',
    value: function read(id) {
      return new Promise(function (resolve, reject) {
        _users2.default.where('id', id).fetch({ columns: ['id', 'username', 'rank', 'look'], withRelated: ['rank'] }).then(function (user) {
          if (user) {
            resolve(user.toJSON());
          } else {
            reject({ errors: 404 });
          }
        }).catch(function (error) {
          reject({ errors: error });
        });
      });
    }
  }, {
    key: 'update',
    value: function update(data) {
      return new Promise(function (resolve, reject) {
        new _users2.default(data).save().then(function (user) {
          resolve(user.toJSON());
        }).catch(function (error) {
          reject({ errors: error });
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      return new Promise(function (resolve, reject) {
        _users2.default.where('id', id).fetch().then(function (user) {
          if (user) {
            user.destroy();
            resolve();
          } else {
            reject(4040);
          }
        }).catch(function (error) {
          reject({ errors: error });
        });
      });
    }

    // Additional Query Types

  }, {
    key: 'retrieve',
    value: function retrieve(column, value, type) {
      return new Promise(function (resolve, reject) {
        if (!type) {
          _users2.default.where(column, value).query('columns', ['username', 'look', 'rank']).fetchAll({ withRelated: ['rank'] }).then(function (users) {
            if (users) {
              resolve(users.toJSON());
            } else {
              resolve(null);
            }
          }).catch(function (error) {
            reject({ errors: error });
          });
        } else {
          _users2.default.where(column, value).query('columns', ['id', 'username', 'look', 'rank']).fetch({ withRelated: ['rank', 'friends', 'friends.user', 'rooms'] }).then(function (user) {
            if (user) {
              resolve(user.toJSON());
            } else {
              resolve(null);
            }
          }).catch(function (error) {
            reject({ errors: error });
          });
        }
      });
    }
  }, {
    key: 'retrieveTop',
    value: function retrieveTop(column, limit) {
      return new Promise(function (resolve, reject) {
        _users2.default.where('rank', '<', 3).query('orderBy', column, 'DESC').query('limit', limit).query('columns', ['id', 'username', 'look', 'rank', column]).fetchAll().then(function (users) {
          resolve(users.toJSON());
        }).catch(function (error) {
          reject({ error: error });
        });
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;