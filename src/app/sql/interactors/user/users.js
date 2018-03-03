import Model from '../../models/user/users'
export default class Interactor {

  // CRUD
  static async create (data) {
    try {

      // Validate
      let step = await Interactor.validate(data.username, 'username')
      step     = await Interactor.validate(data.email, 'email')

      // Create
      let user = await new Model(data).save()
      user     = await Interactor.read(data.username, 'username')
      return user

    }
    catch (error) {
      throw new Error(error)
    }
  }

  static async read (data, type) {
    try {
      let user = await Model.where(data, type).fetch({ columns : ['id', 'username'] })
      return user
    }
    catch (error) {
      throw new Error(error)
    }
  }

  // Other

  static async validate (data, type) {
    
    let regex = ''

    switch (type) {

      case 'username':
        regex = '^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'
        if (regex.test(data)) {
          let users = await Model.where('username', data).fetchAll({ columns : ['id'] })
          if (users.length==0) {
            return true
          } else {
            throw new Error('RETURN: Username is already taken')
          }
        } else {
          throw new Error('RETURN: Username is not valid')
        }
      break;

      case 'email':
        regex = '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
        if (regex.test(data)) {
          let users = await Model.where('mail', data).fetchAll({ columns : ['id'] })
          if (users.length==0) {
            return true
          } else {
            throw new Error('RETURN: Email is already taken')
          }
        } else {
          throw new Error('RETURN: Email is not valid')
        }
      break;

    }
  }


}
