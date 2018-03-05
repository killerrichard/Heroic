import Controller from '../../controller/user/sessions'
export default class Routes {

  constructor (http) {

    // General Access 
    http.post('/api/users/session/:username', Controller.create)


  }

}
