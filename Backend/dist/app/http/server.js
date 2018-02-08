'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _writer = require('../lib/writer');

var _writer2 = _interopRequireDefault(_writer);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _routes = require('./controller/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
  function Server(time) {
    _classCallCheck(this, Server);

    _async2.default.waterfall([Server.start, Server.configure, _routes2.default.load], function (errors, http) {
      http.use('/assets', _express2.default.static(_path2.default.join(__dirname, '..', '..', 'public', 'assets')));

      http.get('/*', function (req, res) {
        res.sendFile(_path2.default.join(__dirname, '..', '..', 'public', 'views', 'index.html'));
      });

      http.listen(80, function () {
        _writer2.default.push('Heroic took ' + (Date.now() - time) + 'ms to launch');
      });
    });
  }

  _createClass(Server, null, [{
    key: 'start',
    value: function start(callback) {
      var http = (0, _express2.default)();
      http.set('view cache', true);
      callback(null, http);
    }
  }, {
    key: 'configure',
    value: function configure(http, callback) {
      http.use((0, _compression2.default)());
      http.use(_bodyParser2.default.urlencoded({ extended: true }));
      http.use(_bodyParser2.default.json());
      http.use((0, _cookieParser2.default)());
      callback(null, http);
    }
  }]);

  return Server;
}();

exports.default = Server;