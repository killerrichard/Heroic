import Model from '../../models/config/website'
export default class Interactor {

  static async read () {
    return Model.where('id', 1).fetch({ columns : ['site_name', 'site_desc', 'site_link', 'server_ip', 'server_port'] })
  }
  
}
