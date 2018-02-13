import Radio from '../../model/website/radio'
export default class CRUD {

  static create (data) {
    return new Promise ((resolve, reject) => {
      new Radio(data).save()
        .then (song => {
          song.fetch({ withRelated : ['author'] })
            .then (song => {
              resolve(song.toJSON())
            })
            .catch (error => {
              reject(error)
            })
        })
        .catch (error => {
          reject(error)
        })
    })
  }

  static read () {
    return new Promise ((resolve, reject) => {
      Radio.query('columns', ['id', 'user', 'video_id', 'video_title', 'video_image', 'timestamp']).fetchAll({ withRelated : ['author'] })
        .then (songs => {
          if (songs) {
            resolve(songs.toJSON())
          } else {
            resolve()
          }
        })
        .catch (error => {
          reject(error)
        })
    })
  }

}
