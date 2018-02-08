'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _user_auth = require('../../../sql/ext/emulator/user_auth');

var _user_auth2 = _interopRequireDefault(_user_auth);

var _user_crud = require('../../../sql/ext/emulator/user_crud');

var _user_crud2 = _interopRequireDefault(_user_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Register = function () {
  function Register() {
    _classCallCheck(this, Register);
  }

  _createClass(Register, null, [{
    key: 'try',
    value: function _try(req, res) {
      _async2.default.waterfall([_async2.default.apply(Register.sanitize, req), Register.validate, _user_auth2.default.hasDuplicates, _user_auth2.default.hasAccounts, _user_crud2.default.create, _login2.default.push], function (errors, token) {
        if (errors) {
          console.log(errors);
          res.status(500).send(errors).end();
        } else {
          res.status(200).json(token).end();
        }
      });
    }

    // Cuts down request object into data that is needed

  }, {
    key: 'sanitize',
    value: function sanitize(req, callback) {
      var data = {
        username: req.body.username,
        password: req.body.password,
        mail: req.body.email.substr(0, 25),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      };

      callback(null, data);
    }

    // Will ensure that the data is valid and safe to use

  }, {
    key: 'validate',
    value: function validate(data, callback) {
      if (_validator2.default.isAlphanumeric(data.username)) {
        if (_validator2.default.isEmail(data.mail)) {
          callback(null, data);
        } else {
          callback({ errors: 'Email contained invalid characters' });
        }
      } else {
        callback({ errors: 'Username contained invalid characters' });
      }
    }

    // Begins the user session

  }, {
    key: 'push',
    value: function push(data, callback) {
      console.log(data);
    }

    // Functions

  }, {
    key: 'matchUsername',
    value: function matchUsername(req, res) {
      _user_crud2.default.retrieve('username', req.params.username, 'data').then(function (user) {
        if (user) {
          res.status(400).end();
        } else {
          res.status(200).end();
        }
      });
    }
  }, {
    key: 'matchEmail',
    value: function matchEmail(req, res) {
      _user_crud2.default.retrieve('mail', req.params.email, 'data').then(function (user) {
        if (user) {
          res.status(400).end();
        } else {
          res.status(200).end();
        }
      });
    }
  }]);

  return Register;
}();

exports.default = Register;