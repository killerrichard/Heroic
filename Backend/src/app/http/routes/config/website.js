import Controller from '../../controller/config/website'
export default class Routes {

  constructor (http) {
    http.get('/api/config/website', Controller.read)
  }

}
