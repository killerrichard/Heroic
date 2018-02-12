'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radio = require('../../model/website/radio');

var _radio2 = _interopRequireDefault(_radio);

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
        new _radio2.default(data).save().then(function (song) {
          song.fetch({ withRelated: ['author'] }).then(function (song) {
            resolve(song.toJSON());
          }).catch(function (error) {
            reject(error);
          });
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'read',
    value: function read() {
      return new Promise(function (resolve, reject) {
        _radio2.default.query('columns', ['id', 'user', 'video_id', 'video_title', 'video_image', 'timestamp']).fetchAll({ withRelated: ['author'] }).then(function (songs) {
          if (songs) {
            resolve(songs.toJSON());
          } else {
            resolve();
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