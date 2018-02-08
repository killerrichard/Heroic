'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _photos = require('../../model/emulator/photos');

var _photos2 = _interopRequireDefault(_photos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'read',
    value: function read() {
      return new Promise(function (resolve, reject) {
        _photos2.default.query('orderBy', 'id', 'DESC').query('limit', 32).query('columns', ['id', 'user_id', 'url', 'timestamp']).fetchAll({ withRelated: ['author', 'likes'] }).then(function (photos) {
          resolve(photos.toJSON());
        }).catch(function (error) {
          reject({ errors: error });
        });
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;