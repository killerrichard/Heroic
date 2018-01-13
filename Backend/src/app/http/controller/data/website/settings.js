import Website from '../../../../sql/ext/website/settings'
export default class Settings {

  static get (req, res) {
    Website.read()
      .then (website => {
        res.status(200).send(website).end()
      })
      .catch (error => {
        res.status(500).send(error).end()
      })
  }
}
