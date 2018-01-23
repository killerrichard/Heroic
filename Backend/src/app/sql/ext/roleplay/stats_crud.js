import Stats from '../../model/roleplay/stats'
export default class CRUD {


  static retrieveTop (column, limit) {
    return new Promise ((resolve, reject) => {
      Stats.query('orderBy', column, 'DESC').query('limit', limit).query('columns', ['id', column]).fetchAll({ withRelated : ['user']})
        .then (users => {
          resolve(users.toJSON())
        })
        .catch (error => {
          reject({ error : error })
        })
    })
  }

}
