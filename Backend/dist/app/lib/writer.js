'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Writer = function () {
  function Writer() {
    _classCallCheck(this, Writer);
  }

  _createClass(Writer, null, [{
    key: 'push',
    value: function push(msg, type) {

      if (!type) type = 'SUCCESS';

      if (Array.isArray(msg)) {
        msg.forEach(function (m) {
          console.log('   [' + type + '] ' + m);
        });
      } else {
        console.log('   [' + type + '] ' + msg);
      }
    }
  }]);

  return Writer;
}();

exports.default = Writer;