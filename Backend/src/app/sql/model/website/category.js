import Database from  '../../server'
export default class Category extends Database.Model {

    get tableName () {
        return 'cms_categories'
    }
}
