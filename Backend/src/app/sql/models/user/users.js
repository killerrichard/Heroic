import Database from  '../../server'
import Notifications from './notifications'
export default class Model extends Database.Model {

  get tableName () {
    return 'users'
  }

  notifications () {
    return this.hasMany(Notifications).query('columns', ['user_id', 'reference_id', 'reference_type', 'title', 'content', 'timestamp'])
  }

}
