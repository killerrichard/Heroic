import Login from './auth/login'
import Session from './auth/session'
import Register from './auth/register'
import Website from './data/website/settings'
export default class Routes {

  static load (http, cb) {

    // Guest
    http.post('/api/auth/login', Login.try)
    http.post('/api/auth/register', Register.try)

    // Authentication
    http.get('/api/auth/session/fetch', Session.get)

    // Data Routes
    http.get('/api/data/website/settings', Website.get)


    // Return
    cb(null, http)

  }

}
