import Model from '../../models/news/categories'
export default class Interactor {

  static async create (data) {
    try {
      let step = await new Model(data).save()
      step     = await Model.query('orderBy', 'id', 'DESC').fetch({ columns : ['id'] })
      return Interactor.read(step.toJSON().id)
    }
    catch (error) {
      throw new Error(error)
    }
  }

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

  static update (data) {
    return new Model(data).save()
  }

  static delete (id) {
    return Model.where('id', id).destroy()
  }

}
