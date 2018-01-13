import News from '../../../../sql/ext/website/news_crud'
export default class Settings {

  static get (req, res) {
    News.read()
      .then (website => {
        res.status(200).send(website).end()
      })
      .catch (error => {
        console.log(error)
        res.status(500).send(error).end()
      })
  }
}
