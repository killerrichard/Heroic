import Controller from '../../controller/user/ranks'
export default class Routes {

  constructor (http) {
    http.get('/api/users/ranks', Controller.read)
  }

}
