import Hangouts from '../../model/website/hangouts'
export default class CRUD {

  static create (data) {
    return new Promise ((resolve, reject) => {
      new Hangouts(data).save()
        .then (post => {
          post.fetch()
            .then (post => {
              resolve(post.toJSON())
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

  static read (id) {
    return new Promise ((resolve, reject) => {
      if (id) {
        Hangouts.where('id', id).query('columns', ['id', 'user', 'title', 'content', 'timestamp']).fetchAll({ withRelated : ['author', 'likes'] })
          .then (post => {
            if (post) {
              resolve(post.toJSON())
            } else {
              reject('Post does not exist')
            }
          })
          .catch (error => {
            reject(error)
          })
      } else {
        Hangouts.query('orderBy', 'id', 'DESC').query('limit', 20).query('columns', ['id', 'user', 'title', 'content', 'timestamp']).fetchAll({ withRelated : ['author'] })
          .then (posts => {
            resolve(posts.toJSON())
          })
          .catch (error => {
            console.log(error)
            reject(error)
          })
      }
    })
  }

}
