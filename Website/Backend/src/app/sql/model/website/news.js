import Category from './category'
import Users from '../emulator/users'
import Database from  '../../server'
export default class News extends Database.Model {

    get tableName () {
        return 'cms_news'
    }

    category () {
      return this.belongsTo(Category, 'category').query('column', ['id', 'title'])
    }

    author () {
      return this.belongsTo(Users, 'author').query('column', ['id', 'username', 'look'])
    }

}
