'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

var _hangouts_likes = require('./hangouts_likes');

var _hangouts_likes2 = _interopRequireDefault(_hangouts_likes);

var _users = require('../emulator/users');

var _users2 = _interopRequireDefault(_users);

var _hangouts_comments = require('./hangouts_comments');

var _hangouts_comments2 = _interopRequireDefault(_hangouts_comments);

var _hangouts_categories = require('./hangouts_categories');

var _hangouts_categories2 = _interopRequireDefault(_hangouts_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hangouts = function (_Database$Model) {
  _inherits(Hangouts, _Database$Model);

  function Hangouts() {
    _classCallCheck(this, Hangouts);

    return _possibleConstructorReturn(this, (Hangouts.__proto__ || Object.getPrototypeOf(Hangouts)).apply(this, arguments));
  }

  _createClass(Hangouts, [{
    key: 'author',
    value: function author() {
      return this.belongsTo(_users2.default, 'user').query('columns', ['id', 'username', 'look', 'rank']);
    }
  }, {
    key: 'likes',
    value: function likes() {
      return this.hasMany(_hangouts_likes2.default, 'post').query('columns', ['id', 'post']);
    }
  }, {
    key: 'comments',
    value: function comments() {
      return this.hasMany(_hangouts_comments2.default, 'post').query('columns', ['id', 'post', 'user', 'content']);
    }
  }, {
    key: 'category',
    value: function category() {
      return this.belongsTo(_hangouts_categories2.default, 'category').query('columns', ['id', 'title', 'staff']);
    }
  }, {
    key: 'tableName',
    get: function get() {
      return 'cms_hangouts';
    }
  }]);

  return Hangouts;
}(_server2.default.Model);

Hangouts.dependents = ['likes', 'comments'];
exports.default = Hangouts;