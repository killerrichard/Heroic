import Controller from '../../controller/news/categories'
export default class Routes {

  constructor (http) {
    http.get('/api/news/categories', Controller.read)
    http.get('/api/news/categories/:id', Controller.read)
  }

}
