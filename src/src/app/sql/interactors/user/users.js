import Hash from 'bcrypt'
import Model from '../../models/user/users'
export default class Interactor {

  // CRUD
  static async create (data) {
    try {

      data.password = Hash.hashSync(data.password, 10)

      // Validate
      let step = await Interactor.validate(data.username, 'username', true)
      step     = await Interactor.validate(data.mail, 'email', true)

      // Create
      step     = await new Model(data).save()
      step     = await Interactor.read(data.username, 'username')
      return step

    }
    catch (error) {
      throw new Error(error)
    }
  }

  static read (data, type) {
    return Model.where(type, data).fetch({ columns : ['id', 'username', 'mail', 'look', 'rank'] })
  }

  static update (data) {
    return new Model(data).save()
  }

  // Other
  static async validate (data, type, query) {
    if (data != undefined) {
      let regex = ''

      switch (type) {

        case 'username':
          regex = new RegExp('^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
          if (regex.test(data)) {
            if (query) {
              let users = await Model.where('username', data).fetchAll({ columns : ['id'] })
              if (users.length==0) {
                return true
              } else {
                throw new Error('RETURN: Username is already taken')
              }
            } else {
              return true
            }
          } else {
            throw new Error('RETURN: Username is not valid')
          }
        break;

        case 'email':
          regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
          if (regex.test(data)) {
            if (query) {
              let users = await Model.where('mail', data).fetchAll({ columns : ['id'] })
              if (users.length==0) {
                return true
              } else {
                throw new Error('RETURN: Email is already taken')
              }
            } else {
              return true
            }
          } else {
            throw new Error('RETURN: Email is not valid')
          }
        break;

      }
    } else {
      throw new Error(`RETURN: ${type} is empty`)
    }
  }

  static async login (username, password) {
    try {
        let user = await Interactor.validate(username, 'username', false)
        user     = await Model.where('username', username).fetch({ columns : ['password'] })
        if (user) {
          if (Hash.compareSync(password, user.toJSON().password)) {
            return true;
          } else {
            throw new Error(`RETURN: That's not the right password`)
          }
        } else {
          throw new Error('RETURN: That user does not exist')
        }
    }
    catch (error) {
      throw new Error(error)
    }
  }


}
