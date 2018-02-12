'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hangouts_crud = require('../../../../sql/ext/website/hangouts_crud');

var _hangouts_crud2 = _interopRequireDefault(_hangouts_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hangouts = function () {
  function Hangouts() {
    _classCallCheck(this, Hangouts);
  }

  _createClass(Hangouts, null, [{
    key: 'list',
    value: function list(req, res) {
      _hangouts_crud2.default.read().then(function (posts) {
        res.status(200).json(posts).end();
      }).catch(function (error) {
        res.status(400).end();
      });
    }
  }, {
    key: 'view',
    value: function view(req, res) {
      _hangouts_crud2.default.read(req.params.id).then(function (post) {
        res.status(200).json(post).end();
      }).catch(function (error) {
        res.status(400).end();
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {

      var data = {
        user: req.decoded.id,
        title: req.body.title,
        content: req.body.content,
        thumb: req.body.thumb,
        category: req.body.category
      };

      _hangouts_crud2.default.create(data).then(function (post) {
        res.status(200).json(post).end();
      }).catch(function (error) {
        console.log(error);
        res.status(400).end();
      });
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      if (req.decoded.rank.staff == 0) {
        _hangouts_crud2.default.retrieve(req.params.id).then(function (post) {
          if (post.author.id == req.decoded.id) {
            _hangouts_crud2.default.delete(req.params.id).then(function (post) {
              res.status(200).end();
            }).catch(function (error) {
              res.status(400).end();
            });
          } else {
            reject();
          }
        });
      } else {
        _hangouts_crud2.default.delete(req.params.id).then(function (post) {
          res.status(200).end();
        }).catch(function (error) {
          console.log(error);
          res.status(400).end();
        });
      }
    }
  }, {
    key: 'create_comment',
    value: function create_comment(req, res) {
      _hangouts_crud2.default.create_comment(req.body).then(function (comment) {
        res.status(200).json(comment).end();
      }).catch(function (error) {
        res.status(400).end();
      });
    }
  }, {
    key: 'delete_comment',
    value: function delete_comment(req, res) {
      if (req.decoded.rank.staff == 0) {
        _hangouts_crud2.default.retrieve_comment(req.params.id).then(function (comment) {
          if (comment.user == decoded.id) {
            _hangouts_crud2.default.delete_comment(req.params.id).then(function (comment) {
              res.status(200).end();
            }).catch(function (error) {
              res.status(400).end();
            });
          } else {
            res.status(400).end();
          }
        }).catch(function (error) {
          res.status(400).end();
        });
      } else {
        _hangouts_crud2.default.delete_comment(req.params.id).then(function (comment) {
          res.status(200).end();
        }).catch(function (error) {
          res.status(400).end();
        });
      }
    }
  }]);

  return Hangouts;
}();

exports.default = Hangouts;