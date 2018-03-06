import Controller from '../../controller/store/paypal'
export default class Routes {

  constructor (http) {
    http.post('/api/store/paypal', Controller.process)
  }

}
