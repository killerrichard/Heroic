import Likes from '../../model/emulator/photo_likes'
export default class CRUD {

  static create (data) {
    return new Promise ((resolve, reject) => {
      Likes.where('user_id', data.user_id).where('photo_id', data.photo_id).fetch()
        .then (photo => {
          if (photo) {
            photo.destroy()
              .then (photo => {
                resolve('unliked')
              })
              .catch (error => {
                reject(error)
              })
          } else {
            new Likes(data).save()
              .then (photo => {
                resolve('liked')
              })
              .catch (error => {
                reject(error)
              })
          }
        })
        .catch (error => {
          reject(error)
        })
    })

  }

}
