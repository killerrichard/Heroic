'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _likes_crud = require('../../../../sql/ext/emulator/likes_crud');

var _likes_crud2 = _interopRequireDefault(_likes_crud);

var _photos_crud = require('../../../../sql/ext/emulator/photos_crud');

var _photos_crud2 = _interopRequireDefault(_photos_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Photos = function () {
  function Photos() {
    _classCallCheck(this, Photos);
  }

  _createClass(Photos, null, [{
    key: 'get',
    value: function get(req, res) {
      _photos_crud2.default.read().then(function (photos) {
        res.status(200).json(photos).end();
      }).catch(function (errors) {
        res.status(400).json(errors).end();
      });
    }
  }, {
    key: 'like',
    value: function like(req, res) {
      _likes_crud2.default.create({ user_id: req.decoded.id, photo_id: req.body.photo_id }).then(function (likes) {
        if (likes == 'liked') {
          res.status(200).json({ status: 'liked' });
        } else {
          res.status(200).json({ status: 'unliked' });
        }
      }).catch(function (errors) {
        console.log(errors);
        res.status(400).json(errors).end();
      });
    }
  }]);

  return Photos;
}();

exports.default = Photos;