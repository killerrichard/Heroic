'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomstring = require('randomstring');

var _randomstring2 = _interopRequireDefault(_randomstring);

var _users = require('../../../sql/model/emulator/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SSO = function () {
  function SSO() {
    _classCallCheck(this, SSO);
  }

  _createClass(SSO, null, [{
    key: 'fetch',
    value: function fetch(req, res) {
      var token = 'heroic_' + _randomstring2.default.generate(7);
      _users2.default.where('id', req.decoded.id).save({ auth_ticket: token }, { method: 'update' }).then(function (user) {
        res.status(200).json({ auth_ticket: token }).end();
      }).catch(function (error) {
        res.status(400).end();
      });
    }
  }]);

  return SSO;
}();

exports.default = SSO;