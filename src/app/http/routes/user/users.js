import Controller from '../../controller/user/users'
export default class Routes {

  constructor (http) {

    // Authentication
    http.put('/api/user/session', Controller.create)
    http.get('/api/auth/user/session', Controller.read)
    http.delete('/api/auth/user/session', Controller.delete)
  }

}
