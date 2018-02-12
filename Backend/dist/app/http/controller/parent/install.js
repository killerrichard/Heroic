'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // What I Need
/*
  - Add Camera login
  - Modify SWFs
  - Modify config.ini
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _install = require('../../../config/install');

var _install2 = _interopRequireDefault(_install);

var _user_crud = require('../../../sql/ext/emulator/user_crud');

var _user_crud2 = _interopRequireDefault(_user_crud);

var _settings = require('../../../sql/ext/website/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, null, [{
    key: 'check',
    value: function check(req, res) {
      if (_install2.default.status) {
        res.status(200).end();
      } else {
        res.status(400).end();
      }
    }
  }, {
    key: 'saveDatabase',
    value: function saveDatabase(req, res) {
      // Configuration Data
      var data = {
        client: 'mysql',
        connection: {
          host: req.body.host,
          user: req.body.user,
          password: req.body.password,
          database: req.body.database
        }

        // Test It
      };(0, _knex2.default)(data).raw('SELECT 1+1 AS result')
      // Save It
      .then(function (result) {
        _fs2.default.writeFileSync(_path2.default.join(__dirname, '..', '..', '..', 'config', 'database.json'), JSON.stringify(data), 'utf-8');
        res.status(200).end();
      })
      // Return 400 (Failed)
      .catch(function (error) {
        res.status(400).end();
      });
    }
  }, {
    key: 'saveGeneral',
    value: function saveGeneral(req, res) {
      // Configuration Data
      var data = {
        name: req.body.name,
        link: req.body.link,
        findretros: req.body.findretros,
        fr_user: req.body.fr_user,
        emu_ip: req.body.emu_ip,
        emu_port: req.body.emu_port,
        swf_folder: req.body.link + '/assets/swfs'
      };

      _settings2.default.update(data).then(function (website) {
        res.status(200).end();
      }).catch(function (error) {
        res.status(400).end();
      });
    }
  }, {
    key: 'saveAdministrator',
    value: function saveAdministrator(req, res) {
      // Configuration Data
      var data = {
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        rank: 7
      };

      _user_crud2.default.create(data).then(function (user) {
        console.log(data);
        res.status(200).end();
      }).catch(function (error) {
        console.log(error);
        res.status(400).end();
      });
    }
  }, {
    key: 'finish',
    value: function finish(req, res) {
      var data = {
        status: true
      };
      _fs2.default.writeFileSync(_path2.default.join(__dirname, '..', '..', '..', 'config', 'install.json'), JSON.stringify(data), 'utf-8');
      res.status(200).end();
    }
  }]);

  return Controller;
}();

exports.default = Controller;