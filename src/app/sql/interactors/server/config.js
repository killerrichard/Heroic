import Model from '../../models/server/config'
export default class Interactor {

  static async  read () {
    try {
      let config = await Model.where('id', 1).fetch({ columns : ['site_name', 'site_desc', 'site_link'] })
      return config.toJSON()
    } catch (error) {
      throw new Error(error)
    }
  }

}
