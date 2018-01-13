import User from '../../../model/emulator/users'
export default class CRUD {

  static create (data, callback) {
    if (callback) {
      new User(data).save()
        .then (user => {
          user.fetch({ columns : ['id', 'username', 'rank', 'look']})
            .then (user => {
              callback(null, user.toJSON())
            })
            .catch (error => {
              callback({ errors : error })
            })
        })
        .catch (error => {
          callback({ errors : error })
        })
    } else {
      return new Promise ((resolve, reject) => {
        new User(data).save()
          .then (user => {
            user.fetch({ columns : ['id', 'username', 'rank', 'look']})
              .then (user => {
                resolve(user.toJSON())
              })
              .catch (error => {
                reject({ errors : error })
              })
          })
          .catch (error => {
            reject({ errors : error })
          })
      })
    }
  }

  static read (id) {
    return new Promise ((resolve, reject) => {
      User.where('id', id).fetch({ columns : ['id', 'username', 'rank', 'look'] })
        .then (user => {
          if (user) {
            resolve(user.toJSON())
          } else {
            reject({ errors : 404})
          }
        })
        .catch (error => {
          reject({ errors : error })
        })
    })
  }

  static update (data) {
    return new Promise ((resolve, reject) => {
      new User(data).save()
        .then (user => {
          resolve(user.toJSON())
        })
        .catch (error => {
          reject({ errors : error })
        })
    })
  }

  static delete (id) {
    return new Promise ((resolve, reject) => {
      User.where('id', id).fetch()
        .then (user => {
          if (user) {
            user.destroy()
            resolve()
          } else {
            reject(4040)
          }
        })
        .catch (error => {
          reject({ errors : error })
        })
    })
  }

}
