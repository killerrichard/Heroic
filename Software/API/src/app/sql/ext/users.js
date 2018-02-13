import Hash from 'bcrypt'
import Moment from 'moment'
import User from '../model/users'
export default class CRUD {

  static create (data, callback) {
    if (callback) {
      const user = {
        username          : data.username,
        password          : Hash.hashSync(data.password),
        mail              : data.mail,
        account_created   : Moment(Date.now()).unix(),
        ip_register       : data.ip,
        ip_current        : data.ip
      }
      new User(user).save()
        .then (user => {
          callback(null, data)
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
}
