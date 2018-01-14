import Users from '../emulator/users'
import Database from  '../../server'
export default class Category extends Database.Model {

    get tableName () {
        return 'cms_radio'
    }

    author () {
      return this.belongsTo(Users, 'user').query('columns', ['id', 'username', 'look'])
    }

}
