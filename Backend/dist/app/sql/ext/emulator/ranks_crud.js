'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ranks = require('../../model/emulator/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'retrieve',
    value: function retrieve(column, value) {
      return new Promise(function (resolve, reject) {
        _ranks2.default.where(column, value).query('columns', ['id', 'rank_name', 'badge_code', 'staff']).fetchAll({ withRelated: ['members'] }).then(function (ranks) {
          if (ranks) {
            resolve(ranks.toJSON());
          } else {
            resolve(null);
          }
        }).catch(function (errors) {
          reject({ errors: errors });
        });
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;