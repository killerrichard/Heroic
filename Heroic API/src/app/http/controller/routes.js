import Login from './auth/login'
import Session from './auth/session'
import Register from './auth/register'
import Website from './data/website/settings'
export default class Routes {

  static load (http, cb) {

    // Guest
    http.post('/auth/login', Login.try)
    http.post('/auth/register', Register.try)

    // Authentication
    http.get('/auth/session', Session.get)

    // Data Routes
    http.get('/data/website/settings', Website.get)


    // Return
    cb(null, http)

  }

}
