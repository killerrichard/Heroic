import Category from '../../model/website/category'
export default class CRUD {

  static create (data) {
    return new Promise ((resolve, reject) => {

    })
  }

  static read (id) {
    return new Promise ((resolve, reject) => {
      if (id) {
        Category.where('id', id).query('columns', ['id', 'title']).fetchAll({ withRelated : ['articles'] })
          .then (categories => {
            if (category) {
              resolve(category.toJSON())
            } else {
              reject('This category does not exist')
            }
          })
          .catch (error => {
            reject(error)
          })
      } else {
        Category.query('orderBy', 'id', 'DESC').query('columns', ['id', 'title']).fetchAll({ withRelated : ['articles'] })
          .then (categories => {
            resolve(categories.toJSON())
          })
          .catch (error => {
            reject(error)
          })
      }
    })
  }

}
