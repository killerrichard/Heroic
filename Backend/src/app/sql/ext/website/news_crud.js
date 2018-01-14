import News from '../../model/website/news'
export default class CRUD {

  static read (id) {
    return new Promise ((resolve, reject) => {
      if (id) {
        News.where('id', id).query('columns', ['id', 'title', 'category', 'author', 'image', 'content', 'created_at']).fetchAll({ withRelated : ['category', 'author'] })
          .then (article => {
            if (article) {
              resolve(article.toJSON())
            } else {
              reject({ error : "Article does not exist"})
            }
          })
          .catch (error => {
            reject({ "error" : error })
          })
      } else {
        News.query('orderBy', 'id', 'DESC').query('limit', 7).query('columns', ['id', 'title', 'category', 'author', 'image', 'content', 'created_at']).fetchAll({ withRelated : ['category', 'author'] })
          .then (articles => {
            resolve(articles.toJSON())
          })
          .catch (error => {
            reject({ "error" : error })
          })
      }
    })
  }

}
