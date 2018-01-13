import Database from  '../../server'
export default class Likes extends Database.Model {

    get tableName () {
        return 'camera_likes'
    }

}
