import Controller from '../../controller/news/articles'
export default class Routes {

  constructor (http) {
    http.get('/api/news/articles', Controller.read)
    http.get('/api/news/articles/:id', Controller.read)
  }

}
