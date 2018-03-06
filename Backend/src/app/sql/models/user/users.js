import Rank from './ranks'
import Database from  '../../server'
import Notifications from './notifications'
export default class Model extends Database.Model {

  get tableName () {
    return 'users'
  }

  rank () {
    return this.hasOne(Rank, 'id', 'rank').query('columns', ['id', 'rank_name'])
  }

  notifications () {
    return this.hasMany(Notifications).query('columns', ['user_id', 'reference_id', 'reference_type', 'title', 'content', 'timestamp'])
  }

}
