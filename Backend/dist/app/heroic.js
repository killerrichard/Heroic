'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _writer = require('./lib/writer');

var _writer2 = _interopRequireDefault(_writer);

var _server = require('./http/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Heroic = function Heroic(time) {
  _classCallCheck(this, Heroic);

  new _server2.default(time);
};

exports.default = Heroic;