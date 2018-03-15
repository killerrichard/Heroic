import Model from '../../models/user/ranks'
export default class Interactor {

  static async read (id) {
    try {
      if (id) {
        let rank = await Model.where('id', id).fetch({ columns : ['id',' rank_name'], withRelated : ['users'] })
        if (rank) {
          return rank
        } else { 
          throw new Error('RETURN: Rank does not exist')
        }
      } else {
        return Model.fetchAll({ columns : ['id', 'rank_name', 'cms_display_staff'] })
      }
    }
    catch (error) {
      throw new Error (error)
    }
  }

  static async hasRank (id, type) {
    try {
      let rank = Model.where('id', id).fetch({ columns : ['cms_mod', 'cms_admin']})
      rank     = rank.toJSON()
      switch (type) {
        case 'mod':
          if (rank.cms_mod=='1') {
            return true
          } else {
            return false
          }
        break;

        case 'admin':
          if (rank.cms_admin=='1') {
            return true
          } else {
            return false
          }
        break;
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }



}
