import News from '../../model/website/news'
export default class CRUD {

  static read () {
    return new Promise ((resolve, reject) => {
      News.query('orderBy', 'id', 'DESC').query('limit', 7).query('columns', ['id', 'title', 'category', 'author', 'image', 'content', 'created_at']).fetchAll({ withRelated : ['category', 'author'] })
        .then (website => {
          if (website) {
            resolve(website.toJSON())
          } else {
            reject({ "error" : "Failed to fetch cms_settings" })
          }
        })
        .catch (error => {
          reject({ "error" : error })
        })
    })
  }

}
