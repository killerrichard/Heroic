'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Number = function () {
    function Number() {
        _classCallCheck(this, Number);
    }

    _createClass(Number, null, [{
        key: 'youtube',
        value: function youtube(duration) {
            var a = duration.match(/\d+/g);

            if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
                a = [0, a[0], 0];
            }

            if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
                a = [a[0], 0, a[1]];
            }
            if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
                a = [a[0], 0, 0];
            }

            duration = 0;

            if (a.length == 3) {
                duration = duration + parseInt(a[0]) * 3600;
                duration = duration + parseInt(a[1]) * 60;
                duration = duration + parseInt(a[2]);
            }

            if (a.length == 2) {
                duration = duration + parseInt(a[0]) * 60;
                duration = duration + parseInt(a[1]);
            }

            if (a.length == 1) {
                duration = duration + parseInt(a[0]);
            }
            return duration;
        }
    }, {
        key: 'toSecondsFromNow',
        value: function toSecondsFromNow(num) {
            num = Date.now() - num;
            num = num / 1000 % 60;
            num = num.toString().split('.')[0];
        }
    }]);

    return Number;
}();

exports.default = Number;