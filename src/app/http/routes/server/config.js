import Controller from '../../controller/server/config'
export default class Routes {

  constructor (http) {
    http.get('/api/server/config', Controller.read)
  } 

}
