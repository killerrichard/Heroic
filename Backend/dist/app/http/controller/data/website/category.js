'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _category_crud = require('../../../../sql/ext/website/category_crud');

var _category_crud2 = _interopRequireDefault(_category_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Category = function () {
  function Category() {
    _classCallCheck(this, Category);
  }

  _createClass(Category, null, [{
    key: 'list',
    value: function list(req, res) {
      _category_crud2.default.read().then(function (categories) {
        res.status(200).json(categories).end();
      }).catch(function (error) {
        res.status(400).json({ error: error }).end();
      });
    }
  }, {
    key: 'get',
    value: function get(req, res) {
      //
    }
  }]);

  return Category;
}();

exports.default = Category;