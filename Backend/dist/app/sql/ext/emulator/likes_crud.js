'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _photo_likes = require('../../model/emulator/photo_likes');

var _photo_likes2 = _interopRequireDefault(_photo_likes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'create',
    value: function create(data) {
      return new Promise(function (resolve, reject) {
        _photo_likes2.default.where('user_id', data.user_id).where('photo_id', data.photo_id).fetch().then(function (photo) {
          if (photo) {
            photo.destroy().then(function (photo) {
              resolve('unliked');
            }).catch(function (error) {
              reject(error);
            });
          } else {
            new _photo_likes2.default(data).save().then(function (photo) {
              resolve('liked');
            }).catch(function (error) {
              reject(error);
            });
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;