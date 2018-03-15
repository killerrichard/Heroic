import Controller from '../../controller/user/sessions'
export default class Routes {

  constructor (http) {
    http.post('/api/users/session/:username', Controller.create)
    http.get('/api/auth/users/session/:username', Controller.read)
  }

}
