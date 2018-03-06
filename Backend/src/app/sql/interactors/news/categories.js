import Model from '../../models/news/categories'
export default class Interactor {

  static async read (id) {
    try {
      if (id) {
        return Model.where('id', id).fetch({ columns : ['id', 'title', 'content', 'timestamp'], withRelated : ['articles', 'articles.author'] })
      } else {
        return Model.query('orderBy', 'id', 'DESC').fetchAll({ columns : ['id', 'title', 'content', 'timestamp'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }

}
