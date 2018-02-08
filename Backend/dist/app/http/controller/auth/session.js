'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user_crud = require('../../../sql/ext/emulator/user_crud');

var _user_crud2 = _interopRequireDefault(_user_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Session = function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, null, [{
    key: 'get',
    value: function get(req, res) {
      _user_crud2.default.read(req.decoded.id).then(function (user) {
        res.status(200).json(user).end();
      }).catch(function (error) {
        console.log(error);
        res.status(400).json({ error: error }).end();
      });
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      req.session = null;
      res.status(200).json({ session: null }).end();
    }
  }]);

  return Session;
}();

exports.default = Session;