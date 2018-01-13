import Async from 'async'
import Express from 'express'
import Body from 'body-parser'
import Redis from 'connect-redis'
import Writer from '../lib/writer'
import Cookies from 'cookie-parser'
import Session from 'express-session'
import Routes from './controller/routes'
export default class Server {

  constructor (time) {
    Async.waterfall([ Server.start, Server.configure, Routes.load ], ((errors, http) => {
      http.use(Express.static(`${home}/public`))

      http.get('/*', ((req, res) => {
        res.sendFile(`${home}/public/views/index.html`)
      }))

      http.listen(80, (() => {
        Writer.push(`Heroic took ${Date.now()-time}ms to launch`)
      }))
    }))
  }

  static start (callback) {
    const http = Express()
    callback(null, http)
  }

  static configure (http, callback) {
    const redis = new Redis(Session)
    http.use(Body.json())
    http.use(Cookies())
    http.use(Session({ store : new redis, saveUninitialized: true, resave: true, secret: 'sld&!@$ZZACHRIS', ttl : 3600, cookie: { maxAge: 3600000 * 24 * 7 } }))
    callback(null, http)
  }

}
