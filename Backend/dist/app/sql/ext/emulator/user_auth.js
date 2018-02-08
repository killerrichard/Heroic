'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user_crud = require('./user_crud');

var _user_crud2 = _interopRequireDefault(_user_crud);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _users = require('../../model/emulator/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: 'attempt',


    // Login Functions
    value: function attempt(data) {
      return new Promise(function (resolve, reject) {
        _users2.default.where('username', data.username).fetch({ withRelated: ['rank'], columns: ['id', 'username', 'password', 'rank'] }).then(function (user) {
          if (user) {
            if (_bcryptNodejs2.default.compareSync(data.password, user.toJSON().password)) {
              _user_crud2.default.read(user.toJSON().id).then(function (user) {
                resolve(user);
              }).catch(function (error) {
                reject({ errors: error });
              });
            } else {
              reject({ errors: 'auth' });
            }
          } else {
            reject({ errors: 'auth' });
          }
        }).catch(function (error) {
          reject({ errors: error });
        });
      });
    }

    // Registration Functions

  }, {
    key: 'hasDuplicates',
    value: function hasDuplicates(data, callback) {
      _users2.default.query(function (qb) {
        qb.where('username', data.username);qb.orWhere('mail', data.mail);
      }).fetch({ columns: ['id'] }).then(function (users) {
        if (users) {
          callback({ errors: 'Username or email is being used!' });
        } else {
          callback(null, data);
        }
      });
    }
  }, {
    key: 'hasAccounts',
    value: function hasAccounts(data, callback) {
      _users2.default.where('ip_current', data.ip).fetch({ columns: ['id'] }).then(function (users) {
        if (users && users.length > 3) {
          callback({ errors: 'You already registered the maximum number of accounts!' });
        } else {
          callback(null, data);
        }
      });
    }

    // Seperate API Functions

  }, {
    key: 'hasDuplicate',
    value: function hasDuplicate(data, type) {
      return new Promise(function (resolve, reject) {
        _users2.default.where(type, data).fetch({ columns: ['id'] }).then(function (users) {
          if (users) {
            reject({ errors: 'already in use' });
          } else {
            resolve();
          }
        });
      });
    }
  }]);

  return Auth;
}();

exports.default = Auth;