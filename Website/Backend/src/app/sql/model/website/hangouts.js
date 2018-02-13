import Database from  '../../server'
import Likes from './hangouts_likes'
import Users from '../emulator/users'
import Comments from './hangouts_comments'
import Category from './hangouts_categories'
export default class Hangouts extends Database.Model {

    get tableName () {
      return 'cms_hangouts'
    }

    author () {
      return this.belongsTo(Users, 'user').query('columns', ['id', 'username', 'look', 'rank'])
    }

    likes () {
      return this.hasMany(Likes, 'post').query('columns', ['id', 'post'])
    }

    comments () {
      return this.hasMany(Comments, 'post').query('columns', ['id', 'post', 'user', 'content'])
    }

    category () {
      return this.belongsTo(Category, 'category').query('columns', ['id', 'title', 'staff'])
    }

    static dependents = ['likes', 'comments']

}
