import Database from  '../../server'
export default class Ranks extends Database.Model {

    get tableName () {
        return 'rp_jobs_ranks'
    }

}
