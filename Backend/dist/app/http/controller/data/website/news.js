'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _news_crud = require('../../../../sql/ext/website/news_crud');

var _news_crud2 = _interopRequireDefault(_news_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var News = function () {
  function News() {
    _classCallCheck(this, News);
  }

  _createClass(News, null, [{
    key: 'get',
    value: function get(req, res) {
      if (req.params.id) {
        _news_crud2.default.read(req.params.id).then(function (website) {
          res.status(200).send(website).end();
        }).catch(function (error) {
          console.log(error);
          res.status(500).send(error).end();
        });
      } else {
        _news_crud2.default.read().then(function (website) {
          res.status(200).send(website).end();
        }).catch(function (error) {
          console.log(error);
          res.status(500).send(error).end();
        });
      }
    }
  }]);

  return News;
}();

exports.default = News;