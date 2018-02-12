'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user_auth = require('../../../sql/ext/emulator/user_auth');

var _user_auth2 = _interopRequireDefault(_user_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, null, [{
    key: 'try',
    value: function _try(req, res) {

      if (req.body.username != null && req.body.password != null) {
        _user_auth2.default.attempt(req.body).then(function (user) {
          var token = _jsonwebtoken2.default.sign(user, 'sld&!@$ZZACHRIS', { expiresIn: 60 * 60 * 24 });
          res.status(200).json(token).end();
        }).catch(function (error) {
          res.status(400).end();
        });
      } else {
        res.status(400).end();
      }
    }
  }, {
    key: 'sso',
    value: function sso(req, res) {
      res.status(200).json({ sso: 'LOL' }).end();
    }
  }, {
    key: 'push',
    value: function push(data, callback) {
      _user_auth2.default.attempt({ username: data.username, password: data.password }).then(function (user) {
        var token = _jsonwebtoken2.default.sign(user, 'sld&!@$ZZACHRIS', { expiresIn: 60 * 60 * 24 });
        callback(null, token);
      }).catch(function (error) {
        callback(error);
      });
    }
  }]);

  return Login;
}();

exports.default = Login;