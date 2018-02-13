import Database from  '../../server'
export default class Likes extends Database.Model {

    get tableName () {
      return 'cms_hangouts_likes'
    }

}
