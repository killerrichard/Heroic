import Model from '../../models/news/articles'
export default class Interactor {

  static async read (id) {
    try {
      if (id) {
        return Model.where('id', id).fetch({ columns : ['id', 'user_id', 'category_id', 'title', 'description', 'content', 'image', 'timestamp'], withRelated : ['author', 'category'] })
      } else {
        return Model.query('orderBy', 'id', 'DESC').fetchAll({ columns : ['id', 'user_id', 'category_id', 'title', 'description', 'image', 'timestamp'], withRelated : ['author', 'category'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }
}
