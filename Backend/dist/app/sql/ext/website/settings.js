'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = require('../../model/website/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);
  }

  _createClass(Settings, null, [{
    key: 'update',
    value: function update(data) {
      return new Promise(function (resolve, reject) {
        _settings2.default.where('id', 1).save(data, { method: 'update' }).then(function (website) {
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'read',
    value: function read() {
      return new Promise(function (resolve, reject) {
        _settings2.default.where('id', 1).fetch().then(function (website) {
          if (website) {
            resolve(website.toJSON());
          } else {
            reject('Failed to fetch cms_settings');
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }]);

  return Settings;
}();

exports.default = Settings;