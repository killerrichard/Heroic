import Hangouts from '../../model/website/hangouts'
import Comments from '../../model/website/hangouts_comments'
import Categories from '../../model/website/hangouts_categories'
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
        Hangouts.where('id', id).query('columns', ['id', 'category', 'user', 'title', 'thumb', 'content', 'timestamp']).fetch({ withRelated : ['category', 'author', 'likes', 'comments', 'comments.author'] })
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
        Categories.query('columns', ['id', 'title', 'staff', 'staff_post']).fetchAll({ withRelated : ['posts', 'posts.author'] })
          .then (posts => {
            resolve(posts.toJSON())
          })
          .catch (error => {
            reject(error)
          })
      }
    })
  }

  static delete (id) {
    return new Promise ((resolve, reject) => {
      Hangouts.where('id', id).fetch()
        .then (post => {
          if (post) {
            post.destroy()
              .then (p => {
                resolve()
              })
              .catch (error => {
                reject(error)
              })
          } else {
            reject(404)
          }
        })
        .catch (error => {
          reject(error)
        })
    })
  }

  static create_comment (data) {
    return new Promise ((resolve, reject) => {
      data.content = data.content.substr(0, 21)
      new Comments(data).save()
        .then (comment => {
          comment.fetch({ withRelated : ['author'], columns : ['id', 'post', 'user', 'content'] })
            .then (comment => {
              resolve(comment.toJSON())
            })
            .catch (error => {
              reject()
            })
        })
        .catch (error => {
          reject()
        })
    })
  }

  static delete_comment (id) {
    return new Promise ((resolve, reject)=> {
      Comments.where('id', id).fetch({ columns : ['id'] })
        .then (comment => {
          if (comment) {
            comment.destroy()
            resolve()
          } else {
            resolve()
          }
        })
        .catch (error => {
          reject()
        })
    })
  }

}
