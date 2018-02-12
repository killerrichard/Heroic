'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _news = require('../../model/website/news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'read',
    value: function read(id) {
      return new Promise(function (resolve, reject) {
        if (id) {
          _news2.default.where('id', id).query('columns', ['id', 'title', 'category', 'author', 'image', 'content', 'created_at']).fetchAll({ withRelated: ['category', 'author'] }).then(function (article) {
            if (article) {
              resolve(article.toJSON());
            } else {
              reject({ error: "Article does not exist" });
            }
          }).catch(function (error) {
            reject({ "error": error });
          });
        } else {
          _news2.default.query('orderBy', 'id', 'DESC').query('limit', 7).query('columns', ['id', 'title', 'category', 'author', 'image', 'content', 'created_at']).fetchAll({ withRelated: ['category', 'author'] }).then(function (articles) {
            resolve(articles.toJSON());
          }).catch(function (error) {
            reject({ "error": error });
          });
        }
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;