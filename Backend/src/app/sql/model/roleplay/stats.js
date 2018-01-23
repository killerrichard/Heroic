import Positions from './job_ranks'
import Users from '../emulator/users'
import Database from  '../../server'
export default class Stats extends Database.Model {


    get tableName () {
        return 'rp_stats'
    }

    user () {
      return this.hasOne(Users, 'id').query('columns', ['id', 'username', 'look'])
    }

}
