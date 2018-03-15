import Hash from 'bcrypt'
import Model from '../../models/user/users'
export default class Interactor {

  // CRUD
  static async create(data) {
    try {

      data.password = Hash.hashSync(data.password, 10)

      // Validate
      let step = await Interactor.validate(data.username, 'username', true)
      step = await Interactor.validate(data.mail, 'email', true)

      // Create
      step = await new Model(data).save()
      step = await Interactor.read(data.username, 'username')
      return step

    } catch (error) {
      throw new Error(error)
    }
  }

  static read(data, type, self) {
    if (self) {
      return Model.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online'],
        withRelated: ['rank', 'purchases', 'purchases.product', 'purchases.product.rank']
      })
    } else {
      return Model.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online']
      })
    }
  }

  static update(data) {
    return new Model(data).save()
  }

  // Other
  static async validate(data, type, query) {
    if (data != undefined) {
      let regex = ''

      switch (type) {

        case 'username':
          regex = new RegExp('^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
          if (regex.test(data)) {
            if (query) {
              let users = await Model.where('username', data).fetchAll({
                columns: ['id']
              })
              if (users.length == 0) {
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
              let users = await Model.where('mail', data).fetchAll({
                columns: ['id']
              })
              if (users.length == 0) {
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

        case 'password':
          regex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')
          if (regex.test(data)) {
            return true
          } else {
            throw new Error('RETURN: Password is not strong enough')
          }
          break;

      }
    } else {
      throw new Error(`RETURN: ${type} is empty`)
    }
  }

  static async login(username, password) {
    if (username != undefined && password != undefined) {
      try {
        let user = await Interactor.validate(username, 'username', false)
        user = await Model.where('username', username).fetch({
          columns: ['password']
        })
        if (user) {
          if (Hash.compareSync(password, user.toJSON().password)) {
            return true;
          } else {
            throw new Error(`RETURN: That's not the right password`)
          }
        } else {
          throw new Error('RETURN: That user does not exist')
        }
      } catch (error) {
        throw new Error(error)
      }
    } else {
      throw new Error('RETURN: You need to fill in both username and password.')
    }
  }

  static async fetch(data, type) {
    try {
      return await Model.where(data, type).fetch({
        columns: ['id', 'username', 'rank', 'look', 'credits', 'pixels']
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  static async count(data, type) {
    try {
      return await Model.where(data, type).count()
    } catch (error) {
      throw new Error(error)
    }
  }

  static async exists(id) {
    try {
      let user = await Model.where('id', id).fetch({
        columns: ['id']
      })
      if (user.toJSON().id) {
        return true
      } else {
        throw new Error('RETURN: User does not exist')
      }
    } catch (error) {
      throw new Error(error)
    }

  }

  static async subscription(data) {
    try {
      // Check For Existence 
      await Interactor.exists(data.id)
      // Fetch user
      let user = await Interactor.read(data.id, 'id', true)
      // Format 
      user = user.toJSON()
      // Check Rank 
      if (user.rank.id > data.rank) {
        data.rank = user.rank.id
      }
      // Save 
      await Interactor.update({
        id: data.id,
        rank: data.rank,
        credits: user.credits + data.credits,
        pixels: user.credits + data.pixels,
        points: user.points + data.points
      })
      return 'Account has been updated'
    } catch (error) {
      throw new Error(error)
    }
  }

}