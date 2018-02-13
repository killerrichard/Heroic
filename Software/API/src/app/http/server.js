import Async from 'async'
import Express from 'express'
import Body from 'body-parser'
import Compress from 'compression'
import Cookies from 'cookie-parser'
import Routes from './controller/routes'
export default class Server {

  constructor (time) {
    Async.waterfall([ Server.start, Server.configure, Routes.load], ((errors, http) => {
      http.listen(8080, 'localhost', (() => {
        console.log('Parent API is listening on http://localhost:8080')
      }))
    }))
  }

  static start (callback) {
    const http = Express()
    callback(null, http)
  }

  static configure (http, callback) {
    http.use(Compress())
    http.use(Body.urlencoded({ extended : true }))
    http.use(Body.json())
    callback(null, http)
  }

}
