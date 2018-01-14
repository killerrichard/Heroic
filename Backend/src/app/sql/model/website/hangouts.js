import Likes from './hangouts_likes'
import Users from '../emulator/users'
import Database from  '../../server'
export default class Hangouts extends Database.Model {

    get tableName () {
      return 'cms_hangouts'
    }

    author () {
      return this.belongsTo(Users, 'user').query('columns', ['id', 'username', 'look', 'rank'])
    }

    likes () {
      return this.hasMany(Likes, 'post').query('columns', ['id'])
    }

}
