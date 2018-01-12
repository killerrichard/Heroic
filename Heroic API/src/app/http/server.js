import Async from 'async'
import Express from 'express'
import Writer from '../lib/writer'
import Routes from './controller/routes'
export default class Server {

  constructor (time) {

    Async.waterfall([ Server.start, Routes.load ], ((errors, http) => {
      http.use(Express.static(`${root}/public`))

      http.get('/*', ((req, res) => {
        res.sendFile(`${root}/public/views/index.html`)
      }))

      http.listen(80, (() => {
        Writer.push(`Heroic took ${Date.now()-time}ms to launch`)
      }))
    }))

  }

  static start (cb) {
    const http = Express()
    cb(null, http)
  }

}
