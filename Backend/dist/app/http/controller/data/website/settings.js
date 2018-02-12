'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _build = require('../../../../config/build');

var _build2 = _interopRequireDefault(_build);

var _settings = require('../../../../sql/ext/website/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);
  }

  _createClass(Settings, null, [{
    key: 'get',
    value: function get(req, res) {
      _settings2.default.read().then(function (website) {
        res.status(200).json(website).end();
      }).catch(function (error) {
        res.status(500).send(error).end();
      });
    }
  }, {
    key: 'build',
    value: function build(req, res) {
      res.status(200).json(_build2.default).end();
    }
  }]);

  return Settings;
}();

exports.default = Settings;