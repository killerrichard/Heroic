import User from '../emulator/users'
import Database from  '../../server'
export default class Comments extends Database.Model {

    get tableName () {
      return 'cms_hangouts_comments'
    }

    author () {
      return this.belongsTo(User, 'user').query('columns', ['id', 'username', 'look'])
    }

}
