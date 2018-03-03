import Controller from '../../controller/server/stats'
export default class Routes {

  constructor (http) {
    http.get('/api/server/stats', Controller.read)
  }

}
