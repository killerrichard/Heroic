import User from './users'
import Database from  '../../server'
export default class Friends extends Database.Model {

    get tableName () {
        return 'messenger_friendships'
    }


    user () {
      return this.belongsTo(User, 'user_two_id').query('columns', ['id', 'username', 'look'])
    }
}
