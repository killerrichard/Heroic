'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _category = require('../../model/website/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'create',
    value: function create(data) {
      return new Promise(function (resolve, reject) {});
    }
  }, {
    key: 'read',
    value: function read(id) {
      return new Promise(function (resolve, reject) {
        if (id) {
          _category2.default.where('id', id).query('columns', ['id', 'title']).fetchAll({ withRelated: ['articles'] }).then(function (categories) {
            if (category) {
              resolve(category.toJSON());
            } else {
              reject('This category does not exist');
            }
          }).catch(function (error) {
            reject(error);
          });
        } else {
          _category2.default.query('orderBy', 'id', 'DESC').query('columns', ['id', 'title']).fetchAll({ withRelated: ['articles'] }).then(function (categories) {
            resolve(categories.toJSON());
          }).catch(function (error) {
            reject(error);
          });
        }
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;