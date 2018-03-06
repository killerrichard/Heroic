import Controller from '../../controller/camera/photos'
export default class Routes {

  constructor (http) {
    http.get('/api/camera/photos', Controller.read)
    http.get('/api/camera/photos/:id', Controller.read)
  }

}
