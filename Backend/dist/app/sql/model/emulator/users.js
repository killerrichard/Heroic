'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rooms = require('./rooms');

var _rooms2 = _interopRequireDefault(_rooms);

var _ranks = require('./ranks');

var _ranks2 = _interopRequireDefault(_ranks);

var _friends = require('./friends');

var _friends2 = _interopRequireDefault(_friends);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_Database$Model) {
  _inherits(Users, _Database$Model);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'rank',
    value: function rank() {
      return this.belongsTo(_ranks2.default, 'rank').query('columns', ['id', 'rank_name', 'badge_code', 'staff']);
    }
  }, {
    key: 'friends',
    value: function friends() {
      return this.hasMany(_friends2.default, 'user_one_id').query('columns', ['id', 'user_one_id', 'user_two_id']);
    }
  }, {
    key: 'rooms',
    value: function rooms() {
      return this.hasMany(_rooms2.default, 'owner_id').query('columns', ['id', 'name', 'owner_id']);
    }
  }, {
    key: 'tableName',
    get: function get() {
      return 'users';
    }
  }]);

  return Users;
}(_server2.default.Model);

exports.default = Users;