'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hangouts = require('./hangouts');

var _hangouts2 = _interopRequireDefault(_hangouts);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catgories = function (_Database$Model) {
  _inherits(Catgories, _Database$Model);

  function Catgories() {
    _classCallCheck(this, Catgories);

    return _possibleConstructorReturn(this, (Catgories.__proto__ || Object.getPrototypeOf(Catgories)).apply(this, arguments));
  }

  _createClass(Catgories, [{
    key: 'posts',
    value: function posts() {
      return this.hasMany(_hangouts2.default, 'category').query('orderBy', 'id', 'DESC').query('columns', ['id', 'category', 'user', 'title', 'thumb', 'content', 'timestamp']);
    }
  }, {
    key: 'tableName',
    get: function get() {
      return 'cms_hangouts_categories';
    }
  }]);

  return Catgories;
}(_server2.default.Model);

exports.default = Catgories;