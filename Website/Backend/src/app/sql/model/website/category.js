import Articles from './news'
import Database from  '../../server'
export default class Category extends Database.Model {

    get tableName () {
        return 'cms_categories'
    }

    articles () {
      return this.hasMany(Articles, 'category').query('columns', ['id', 'title', 'content', 'image', 'category', 'created_at'])
    }

}
