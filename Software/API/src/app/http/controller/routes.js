import Install from './install'
export default class Routes {
  static load (http, cb) {

    // Installation
    http.get('/api/install/check', Install.check)
    http.post('/api/install/save/database', Install.saveDatabase)
    http.post('/api/install/save/general', Install.saveGeneral)
    http.post('/api/install/save/administrator', Install.saveAdministrator)
    http.post('/api/install/finish', Install.finish)

    // Return
    cb(null, http)

  }

}
