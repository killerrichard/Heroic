'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hangouts = require('../../model/website/hangouts');

var _hangouts2 = _interopRequireDefault(_hangouts);

var _hangouts_comments = require('../../model/website/hangouts_comments');

var _hangouts_comments2 = _interopRequireDefault(_hangouts_comments);

var _hangouts_categories = require('../../model/website/hangouts_categories');

var _hangouts_categories2 = _interopRequireDefault(_hangouts_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRUD = function () {
  function CRUD() {
    _classCallCheck(this, CRUD);
  }

  _createClass(CRUD, null, [{
    key: 'create',
    value: function create(data) {
      return new Promise(function (resolve, reject) {
        new _hangouts2.default(data).save().then(function (post) {
          post.fetch().then(function (post) {
            resolve(post.toJSON());
          }).catch(function (error) {
            reject(error);
          });
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'read',
    value: function read(id) {
      return new Promise(function (resolve, reject) {
        if (id) {
          _hangouts2.default.where('id', id).query('columns', ['id', 'category', 'user', 'title', 'thumb', 'content', 'timestamp']).fetch({ withRelated: ['category', 'author', 'likes', 'comments', 'comments.author'] }).then(function (post) {
            if (post) {
              resolve(post.toJSON());
            } else {
              reject('Post does not exist');
            }
          }).catch(function (error) {
            reject(error);
          });
        } else {
          _hangouts_categories2.default.query('columns', ['id', 'title', 'staff', 'staff_post']).fetchAll({ withRelated: ['posts', 'posts.author'] }).then(function (posts) {
            resolve(posts.toJSON());
          }).catch(function (error) {
            reject(error);
          });
        }
      });
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      return new Promise(function (resolve, reject) {
        _hangouts2.default.where('id', id).fetch().then(function (post) {
          if (post) {
            post.destroy().then(function (p) {
              resolve();
            }).catch(function (error) {
              reject(error);
            });
          } else {
            reject(404);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'create_comment',
    value: function create_comment(data) {
      return new Promise(function (resolve, reject) {
        data.content = data.content.substr(0, 21);
        new _hangouts_comments2.default(data).save().then(function (comment) {
          comment.fetch({ withRelated: ['author'], columns: ['id', 'post', 'user', 'content'] }).then(function (comment) {
            resolve(comment.toJSON());
          }).catch(function (error) {
            reject();
          });
        }).catch(function (error) {
          reject();
        });
      });
    }
  }, {
    key: 'delete_comment',
    value: function delete_comment(id) {
      return new Promise(function (resolve, reject) {
        _hangouts_comments2.default.where('id', id).fetch({ columns: ['id'] }).then(function (comment) {
          if (comment) {
            comment.destroy();
            resolve();
          } else {
            resolve();
          }
        }).catch(function (error) {
          reject();
        });
      });
    }
  }]);

  return CRUD;
}();

exports.default = CRUD;