import Photos from '../../model/emulator/photos'
export default class CRUD {

  static read () {
    return new Promise ((resolve, reject) => {
      Photos.query('orderBy', 'id', 'DESC').query('limit', 32).query('columns', ['id', 'user_id', 'url', 'timestamp']).fetchAll({ withRelated: ['author', 'likes'] })
        .then (photos => {
          resolve(photos.toJSON())
        })
        .catch (error => {
          reject({ errors : error })
        })
    })
  }

}
