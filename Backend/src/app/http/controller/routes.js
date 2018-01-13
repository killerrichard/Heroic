import Login from './auth/login'
import Session from './auth/session'
import News from './data/website/news'
import Register from './auth/register'
import Users from './data/emulator/users'
import Staff from './data/emulator/staff'
import Photos from './data/emulator/photos'
import Online from './data/emulator/online'
import Website from './data/website/settings'
export default class Routes {

  static load (http, cb) {

    // Guest
    http.post('/api/auth/login', Login.try)
    http.post('/api/auth/register', Register.try)
    http.get('/api/auth/client', Login.sso)

    // Authentication
    http.get('/api/auth/session/fetch', Session.get)

    // Data Routes
    http.get('/api/data/website/settings', Website.get)
    http.get('/api/data/website/news/fetch', News.get)
    http.get('/api/data/emulator/users/fetch/:username', Users.get)
    http.get('/api/data/emulator/photos/fetch', Photos.get)
    http.post('/api/data/emulator/photos/like', Photos.like)
    http.get('/api/data/emulator/online/fetch', Online.get)
    http.get('/api/data/emulator/staff/fetch', Staff.get)

    // Return
    cb(null, http)

  }

}
