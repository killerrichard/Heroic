import Path from 'path'
import Async from 'async'
import Express from 'express'
import Body from 'body-parser'
import Compress from 'compression'
import Writer from '../lib/writer'
import Cookies from 'cookie-parser'
import Routes from './controller/routes'
export default class Server {

  constructor (time) {
    Async.waterfall([ Server.start, Server.configure, Routes.load], ((errors, http) => {
      http.use('/assets', Express.static(Path.join(__dirname, '..', '..', 'public', 'assets')))

      http.get('/*', ((req, res) => {
        res.sendFile(Path.join(__dirname, '..', '..', 'public', 'views', 'index.html'))
      }))

      http.listen(80, (() => {
        Writer.push(`Heroic took ${Date.now()-time}ms to launch`)
      }))
    }))
  }

  static start (callback) {
    const http = Express()
    http.set('view cache', true)
    callback(null, http)
  }

  static configure (http, callback) {
    http.use(Compress())
    http.use(Body.urlencoded({ extended : true }))
    http.use(Body.json())
    http.use(Cookies())
    callback(null, http)
  }

}
