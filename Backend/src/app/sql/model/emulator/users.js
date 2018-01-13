import Database from  '../../server'

export default class Users extends Database.Model {

    get tableName () {
        return 'users'
    }

}
