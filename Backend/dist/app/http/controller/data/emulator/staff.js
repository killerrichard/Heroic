'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ranks_crud = require('../../../../sql/ext/emulator/ranks_crud');

var _ranks_crud2 = _interopRequireDefault(_ranks_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Online = function () {
  function Online() {
    _classCallCheck(this, Online);
  }

  _createClass(Online, null, [{
    key: 'get',
    value: function get(req, res) {
      _ranks_crud2.default.retrieve('staff', '1').then(function (users) {
        res.status(200).json(users).end();
      }).catch(function (errors) {
        res.status(400).json(errors).end();
      });
    }
  }]);

  return Online;
}();

exports.default = Online;