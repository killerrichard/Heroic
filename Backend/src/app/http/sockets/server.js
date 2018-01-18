import HTTP from 'http'
import Async from 'async'
import Socket from 'socket.io'
import Routes from './rooms'
export default class Server {

  static launch (http, callback) {
    Async.waterfall([ Server.start, Routes.load ], ((errors, io) => {
      callback(null, http)
    }))
  }

  static start (callback) {
    var app = HTTP.createServer()
    var io  = Socket(app)
    io.set('transports', ['websocket'])
    io.listen(81)
    callback(null, io)
  }

}
