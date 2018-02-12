'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sso = require('./auth/sso');

var _sso2 = _interopRequireDefault(_sso);

var _login = require('./auth/login');

var _login2 = _interopRequireDefault(_login);

var _jwt = require('../middleware/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _session = require('./auth/session');

var _session2 = _interopRequireDefault(_session);

var _install = require('./parent/install');

var _install2 = _interopRequireDefault(_install);

var _news = require('./data/website/news');

var _news2 = _interopRequireDefault(_news);

var _register = require('./auth/register');

var _register2 = _interopRequireDefault(_register);

var _parent = require('../middleware/parent');

var _parent2 = _interopRequireDefault(_parent);

var _users = require('./data/emulator/users');

var _users2 = _interopRequireDefault(_users);

var _staff = require('./data/emulator/staff');

var _staff2 = _interopRequireDefault(_staff);

var _photos = require('./data/emulator/photos');

var _photos2 = _interopRequireDefault(_photos);

var _online = require('./data/emulator/online');

var _online2 = _interopRequireDefault(_online);

var _settings = require('./data/website/settings');

var _settings2 = _interopRequireDefault(_settings);

var _hangouts = require('./data/website/hangouts');

var _hangouts2 = _interopRequireDefault(_hangouts);

var _category = require('./data/website/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function () {
  function Routes() {
    _classCallCheck(this, Routes);
  }

  _createClass(Routes, null, [{
    key: 'load',
    value: function load(http, cb) {

      // Parent

      // Installation
      http.get('/api/install/check', _parent2.default.check, _install2.default.check);
      http.post('/api/install/save/database', _parent2.default.check, _install2.default.saveDatabase);
      http.post('/api/install/save/general', _parent2.default.check, _install2.default.saveGeneral);
      http.post('/api/install/save/administrator', _parent2.default.check, _install2.default.saveAdministrator);
      http.post('/api/install/finish', _parent2.default.check, _install2.default.finish);

      // Guest
      http.post('/api/auth/login', _login2.default.try);
      http.post('/api/auth/register', _register2.default.try);
      http.get('/api/auth/sso', _jwt2.default.check, _sso2.default.fetch);

      // Authentication
      http.get('/api/auth/session/logout', _jwt2.default.check, _session2.default.delete);
      http.get('/api/auth/session/fetch', _jwt2.default.check, _session2.default.get);

      // Check Data
      http.get('/api/data/emulator/users/match/username/:username', _register2.default.matchUsername);
      http.get('/api/data/emulator/users/match/email/:email', _register2.default.matchEmail);

      // Data Routes
      http.get('/api/data/build', _settings2.default.build);
      http.get('/api/data/website/settings', _settings2.default.get);
      http.get('/api/data/website/news/fetch', _news2.default.get);
      http.get('/api/data/website/news/fetch/:id', _news2.default.get);
      http.get('/api/data/website/category/fetch', _category2.default.list);
      http.get('/api/data/website/category/fetch/:id', _category2.default.get);
      http.get('/api/data/emulator/users/fetch/:username', _users2.default.get);
      http.get('/api/data/emulator/users/leaderboards', _users2.default.leaderboard);
      http.get('/api/data/emulator/photos/fetch', _photos2.default.get);
      http.post('/api/data/emulator/photos/like', _jwt2.default.check, _photos2.default.like);
      http.get('/api/data/emulator/online/fetch', _online2.default.get);
      http.get('/api/data/emulator/staff/fetch', _staff2.default.get);
      http.get('/api/data/website/hangouts/post/delete/:id', _jwt2.default.check, _hangouts2.default.delete);
      http.get('/api/data/website/hangouts/comments/delete/:id', _jwt2.default.check, _hangouts2.default.delete_comment);
      http.post('/api/data/website/hangouts/comments/create', _jwt2.default.check, _hangouts2.default.create_comment);
      http.get('/api/data/website/hangouts/fetch', _hangouts2.default.list);
      http.get('/api/data/website/hangouts/fetch/:id', _hangouts2.default.view);
      http.post('/api/data/website/hangouts/create', _jwt2.default.check, _hangouts2.default.create);

      // Return
      cb(null, http);
    }
  }]);

  return Routes;
}();

exports.default = Routes;