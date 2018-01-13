import Users from './users'
import Likes from './photo_likes'
import Database from  '../../server'
export default class Photos extends Database.Model {

    get tableName () {
        return 'camera_web'
    }

    author () {
      return this.belongsTo(Users, 'user_id').query('columns', ['id', 'username', 'look'])
    }

    likes () {
      return this.hasMany(Likes, 'photo_id').query('columns', ['photo_id'])
    }

}
