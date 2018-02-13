import Website from '../model/cms_settings'
export default class Settings {

  static update (data) {
    return new Promise ((resolve, reject) => {
      Website.where('id', 1).save(data, { method : 'update' })
        .then (website => {
          resolve()
        })
        .catch (error => {
          reject(error)
        })
    })
  }

  static read () {
    return new Promise ((resolve, reject) => {
      Website.where('id', 1).fetch()
        .then (website => {
          if (website) {
            resolve(website.toJSON())
          } else {
            reject('Failed to fetch cms_settings')
          }
        })
        .catch (error => {
          reject(error)
        })
    })
  }

}
