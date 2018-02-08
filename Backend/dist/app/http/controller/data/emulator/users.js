'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _user_crud = require('../../../../sql/ext/emulator/user_crud');

var _user_crud2 = _interopRequireDefault(_user_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Users = function () {
  function Users() {
    _classCallCheck(this, Users);
  }

  _createClass(Users, null, [{
    key: 'get',
    value: function get(req, res) {
      _user_crud2.default.retrieve('username', req.params.username, 'single').then(function (user) {
        res.status(200).json(user).end();
      }).catch(function (error) {
        res.status(400).json(error).end();
      });
    }
  }, {
    key: 'leaderboard',
    value: function leaderboard(req, res) {
      _async2.default.parallel([
      // Credits
      function (callback) {
        _user_crud2.default.retrieveTop('credits', 10).then(function (users) {
          callback(null, users);
        }).catch(function (error) {
          callback(error);
        });
      },
      // Pixels
      function (callback) {
        _user_crud2.default.retrieveTop('pixels', 10).then(function (users) {
          callback(null, users);
        }).catch(function (error) {
          callback(error);
        });
      },
      // Diamonds
      function (callback) {
        _user_crud2.default.retrieveTop('points', 10, 'staff', '1').then(function (users) {
          callback(null, users);
        }).catch(function (error) {
          callback(error);
        });
      }], function (errors, results) {
        if (!errors) {
          res.status(200).json({ credits: results[0], pixels: results[1], diamonds: results[2] }).end();
        } else {
          console.log(errors);
          res.status(400).json({ error: errors }).end();
        }
      });
    }
  }]);

  return Users;
}();

exports.default = Users;