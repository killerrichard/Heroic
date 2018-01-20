import Posts from './hangouts'
import Database from  '../../server'
export default class Catgories extends Database.Model {

    get tableName () {
      return 'cms_hangouts_categories'
    }

    posts () {
      return this.hasMany(Posts, 'category').query('orderBy', 'id', 'DESC').query('columns', ['id', 'category', 'user', 'title', 'thumb', 'content', 'timestamp'])
    }

}
