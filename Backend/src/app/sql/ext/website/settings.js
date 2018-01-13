import Website from '../../model/website/settings'
export default class Settings {

  static read () {
    return new Promise ((resolve, reject) => {
      Website.where('id', 1).fetch()
        .then (website => {
          if (website) {
            resolve(website.toJSON())
          } else {
            reject({ "error" : "Failed to fetch cms_settings" })
          }
        })
        .catch (error => {
          reject({ "error" : error })
        })
    })
  }

}
