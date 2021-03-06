'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _categories = require('../../../sql/interactors/news/categories');

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async create(request, reply) {
    try {
      const data = {
        title: request.body.title
      };
      let category = await _categories2.default.create(data);
      reply.code(200).send(category);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async read(request, reply) {
    try {
      if (request.params.id) {
        let category = await _categories2.default.read(request.params.id);
        reply.code(200).send(category);
      } else {
        let categories = await _categories2.default.read();
        reply.code(200).send(categories);
      }
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async update(request, reply) {
    try {
      const data = {
        id: request.params.id,
        title: request.body.title
      };
      let step = await _categories2.default.read(data.id);
      step = await _categories2.default.update(data);
      reply.code(200).send('Category has been updated');
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async delete(request, reply) {
    try {
      let step = await _categories2.default.delete(request.params.id);
      reply.code(200).send('Category has been deleted');
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

}
exports.default = Controller;