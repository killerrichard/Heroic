import Users from './stats'
import Ranks from './job_ranks'
import Database from  '../../server'
import Players from '../emulator/users'
export default class Jobs extends Database.Model {

  static dependents = ['employees']

  get tableName () {
    return 'rp_jobs'
  }

  owner () {
    return this.belongsTo(Players, 'owner_id').query('columns', ['id', 'username', 'look'])
  }

  employees () {
    return this.hasMany(Users, 'job_id').query('columns', ['id', 'job_id', 'job_rank'])
  }

}
