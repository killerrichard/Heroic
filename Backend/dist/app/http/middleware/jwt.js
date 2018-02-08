'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JWT = function () {
  function JWT() {
    _classCallCheck(this, JWT);
  }

  _createClass(JWT, null, [{
    key: 'check',
    value: function check(req, res, next) {
      var token = req.headers['x-access-token'];

      _jsonwebtoken2.default.verify(token, 'sld&!@$ZZACHRIS', function (error, decoded) {
        if (!error) {
          req.decoded = decoded;
          next();
        } else {
          res.status(401).json({ error: 'Failed to authenticate session' }).end();
        }
      });
    }
  }]);

  return JWT;
}();

exports.default = JWT;