'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Database$Model) {
    _inherits(Category, _Database$Model);

    function Category() {
        _classCallCheck(this, Category);

        return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
    }

    _createClass(Category, [{
        key: 'articles',
        value: function articles() {
            return this.hasMany(_news2.default, 'category').query('columns', ['id', 'title', 'content', 'image', 'category', 'created_at']);
        }
    }, {
        key: 'tableName',
        get: function get() {
            return 'cms_categories';
        }
    }]);

    return Category;
}(_server2.default.Model);

exports.default = Category;