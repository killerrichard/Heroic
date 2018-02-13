import Database from  '../server'
export default class Settings extends Database.Model {

    get tableName () {
        return 'cms_settings'
    }

}
